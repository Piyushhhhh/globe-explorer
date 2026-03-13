const fs = require('fs');
const vm = require('vm');
const dataContent = fs.readFileSync('./data.js', 'utf8');
const context = { carbonData: null, countryCoordinates: null };
vm.createContext(context);
vm.runInContext(dataContent, context);
module.exports = context.carbonData;
