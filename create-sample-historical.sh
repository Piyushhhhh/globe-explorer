#!/bin/bash
# Create sample historical data for top 20 countries

# Function to create historical data file
create_historical() {
    local country="$1"
    local total_2023=$2
    local percapita_2023=$3
    local rank=$4

    local filename="data/historical/${country}.json"

    echo "[" > "$filename"

    # Generate years 1993-2023
    for year in {1993..2023}; do
        progress=$(echo "scale=4; ($year - 1993) / 30" | bc)

        # Growth factor (0.6 to 1.0)
        growth=$(echo "scale=4; 0.6 + $progress * 0.4" | bc)

        # Calculate values
        total=$(echo "scale=1; $total_2023 * $growth" | bc)
        percapita=$(echo "scale=2; $percapita_2023 * $growth" | bc)

        # Add entry
        if [ $year -eq 2023 ]; then
            echo "  {\"year\": $year, \"total\": $total, \"perCapita\": $percapita, \"rank\": $rank}" >> "$filename"
        else
            echo "  {\"year\": $year, \"total\": $total, \"perCapita\": $percapita, \"rank\": $rank}," >> "$filename"
        fi
    done

    echo "]" >> "$filename"
    echo "✅ Created $filename"
}

echo "🌍 Creating sample historical data for top 20 countries..."
echo ""

# Create directory
mkdir -p data/historical

# Top 20 countries with their 2023 data
create_historical "China" 11472 8.0 1
create_historical "United States of America" 5007 14.9 2
create_historical "India" 2831 2.0 3
create_historical "Russia" 1711 11.8 4
create_historical "Japan" 1067 8.5 5
create_historical "Germany" 674 8.1 6
create_historical "Iran" 633 7.4 7
create_historical "South Korea" 611 11.9 8
create_historical "Saudi Arabia" 588 16.8 9
create_historical "Indonesia" 565 2.0 10
create_historical "Canada" 565 14.6 11
create_historical "Brazil" 456 2.1 12
create_historical "Mexico" 444 3.4 13
create_historical "Australia" 413 15.4 14
create_historical "United Kingdom" 348 5.1 15
create_historical "Turkey" 391 4.6 22
create_historical "France" 298 4.5 18
create_historical "Italy" 330 5.6 16
create_historical "Poland" 310 8.2 17
create_historical "Spain" 258 5.4 20

echo ""
echo "✨ Done! Created 20 historical data files"
echo "📊 Test by double-clicking a country in the browser"
