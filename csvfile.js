var csvToMarkdown = require('./src/CsvToConfluence.js');
var fs = require('fs');

var file = process.argv[2];
var csv = fs.readFileSync(file);
console.log(csvToMarkdown(csv.toString(), ",", true));
