const fs = require('fs');
const path = 'd:/allwinnextproject/src/data/productsData.ts';
let lines = fs.readFileSync(path, 'utf8').split('\n');

// Find the start and end of the vinyl-cutting-plotters object
const startIndex = lines.findIndex(line => line.includes('"slug": "vinyl-cutting-plotters"')) - 1; // back to the opening brace
const endIndex = lines.findIndex((line, index) => index > startIndex && line.includes('"bgImage": "/images/productbgimages/bg7.webp"')) + 1; // +1 to include the closing brace '  },'

if (startIndex >= 0 && endIndex > startIndex) {
    const numLines = endIndex - startIndex + 1;
    lines.splice(startIndex, numLines, '  vinylCuttingPlotters,');
    lines.splice(0, 0, "import { vinylCuttingPlotters } from './vinylCuttingPlottersData';");
    fs.writeFileSync(path, lines.join('\n'));
    console.log(`Replaced lines ${startIndex} to ${endIndex} successfully.`);
} else {
    console.log("Could not find the block.");
}
