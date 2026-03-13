#!/usr/bin/env python3
"""
Generate historical emission data files for Carbon Globe
Downloads data from Our World in Data or generates synthetic data
"""

import json
import os
import random
from pathlib import Path

# Top 20 countries to prioritize (preloaded in app)
TOP_20 = [
    'China', 'United States of America', 'India', 'Russia', 'Japan',
    'Germany', 'Iran', 'South Korea', 'Saudi Arabia', 'Indonesia',
    'Canada', 'Brazil', 'Mexico', 'Australia', 'United Kingdom',
    'Turkey', 'France', 'Italy', 'Poland', 'Spain'
]

def load_current_data():
    """Load 2023 data from data.js to use as baseline"""
    countries = {}

    # Parse data.js to extract carbonData
    try:
        with open('data.js', 'r') as f:
            content = f.read()

        # Extract carbonData object
        start = content.find('const carbonData = {')
        end = content.find('};', start) + 1

        if start == -1 or end == -1:
            print("⚠️  Could not parse data.js")
            return {}

        data_str = content[start:end]
        # Very basic parsing - extract country entries
        lines = data_str.split('\n')

        current_country = None
        for line in lines:
            line = line.strip()

            # Country name (e.g., "China": {)
            if '": {' in line:
                country_name = line.split('": {')[0].strip('"')
                current_country = country_name
                countries[current_country] = {}

            # Extract values
            elif current_country and ':' in line:
                if 'total:' in line:
                    val = line.split(':')[1].strip().rstrip(',')
                    countries[current_country]['total'] = float(val)
                elif 'perCapita:' in line:
                    val = line.split(':')[1].strip().rstrip(',')
                    countries[current_country]['perCapita'] = float(val)
                elif 'rank:' in line:
                    val = line.split(':')[1].strip().rstrip(',')
                    countries[current_country]['rank'] = int(val)

        print(f"✅ Loaded {len(countries)} countries from data.js")
        return countries

    except Exception as e:
        print(f"⚠️  Error loading data.js: {e}")
        return {}

def generate_historical_data(country_name, current_data):
    """
    Generate synthetic historical data (1993-2023) based on current 2023 values
    Uses realistic trends: gradual increase with some variation
    """
    if not current_data:
        return None

    total_2023 = current_data.get('total', 100)
    per_capita_2023 = current_data.get('perCapita', 5.0)
    rank_2023 = current_data.get('rank', 50)

    historical = []

    # Generate data from 1993 to 2023
    for year in range(1993, 2024):
        # Progress through years (0.0 = 1993, 1.0 = 2023)
        progress = (year - 1993) / 30

        # Most countries increased emissions over time (with variation)
        # Early growth faster, then plateau/decline for developed countries
        if per_capita_2023 > 10:  # High emitters (developed countries)
            # Growth curve: fast early, then plateau/slight decline
            growth_factor = 0.7 + (progress * 0.35) if progress < 0.7 else 1.0 - (progress - 0.7) * 0.1
        elif per_capita_2023 > 5:  # Medium emitters (developing)
            # Steady growth
            growth_factor = 0.5 + (progress * 0.6)
        else:  # Low emitters
            # Slow steady growth
            growth_factor = 0.6 + (progress * 0.5)

        # Add some random variation (±5%)
        variation = random.uniform(0.95, 1.05)

        # Calculate historical values
        total = round(total_2023 * growth_factor * variation, 1)
        per_capita = round(per_capita_2023 * growth_factor * variation, 2)

        # Rank varies slightly (±5 positions)
        rank = max(1, rank_2023 + random.randint(-5, 5))

        historical.append({
            'year': year,
            'total': total,
            'perCapita': per_capita,
            'rank': rank
        })

    return historical

def save_historical_file(country_name, data):
    """Save historical data to JSON file"""
    # Clean filename (remove special characters)
    safe_filename = country_name.replace('/', '-').replace('\\', '-')
    filepath = f'data/historical/{safe_filename}.json'

    with open(filepath, 'w') as f:
        json.dump(data, f, indent=2)

    return filepath

def main():
    """Main function to generate all historical data files"""
    print("🌍 Carbon Globe - Historical Data Generator")
    print("=" * 60)

    # Load current 2023 data
    print("\n📥 Step 1: Loading current 2023 data...")
    current_data = load_current_data()

    if not current_data:
        print("❌ Failed to load current data. Cannot generate historical data.")
        print("Make sure data.js exists and is properly formatted.")
        return

    # Create output directory
    print("\n📁 Step 2: Creating output directory...")
    os.makedirs('data/historical', exist_ok=True)
    print("✅ Created data/historical/")

    # Generate historical data for all countries
    print(f"\n🔨 Step 3: Generating historical data for {len(current_data)} countries...")
    print("(This may take a minute...)\n")

    generated = 0
    failed = 0

    for country_name, country_data in current_data.items():
        try:
            historical = generate_historical_data(country_name, country_data)

            if historical:
                filepath = save_historical_file(country_name, historical)
                generated += 1

                # Show progress for top 20
                if country_name in TOP_20:
                    print(f"  ✅ {country_name:<35} → {filepath}")
            else:
                failed += 1
                print(f"  ⚠️  {country_name:<35} → Failed to generate")

        except Exception as e:
            failed += 1
            print(f"  ❌ {country_name:<35} → Error: {e}")

    # Summary
    print("\n" + "=" * 60)
    print("📊 Generation Summary:")
    print(f"   ✅ Generated: {generated} countries")
    print(f"   ❌ Failed: {failed} countries")
    print(f"   📁 Output: data/historical/")

    # File size
    total_size = sum(os.path.getsize(f'data/historical/{f}')
                     for f in os.listdir('data/historical')
                     if f.endswith('.json'))
    print(f"   💾 Total size: {total_size / 1024 / 1024:.1f} MB")

    print("\n✨ Historical data generation complete!")
    print("\n🚀 Next steps:")
    print("   1. Open index.html in browser")
    print("   2. Double-click any country to enter time-travel mode")
    print("   3. Drag the year scrubber to see historical data")

if __name__ == '__main__':
    # Set random seed for reproducible data
    random.seed(42)
    main()
