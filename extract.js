import { exportImages } from 'pdf-export-images';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths - Updated for this new project location
// The PDF is in D:\geminicli\greenland_small.pdf
// This script is in D:\geminicli\whalebay-pdfcopy\extract.js
const pdfPath = path.resolve(__dirname, '../greenland_small.pdf'); 
const outputDir = path.resolve(__dirname, 'public/assets/images');

// Ensure output directory exists
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Reading PDF from: ${pdfPath}`);
console.log(`Saving images to: ${outputDir}`);

exportImages(pdfPath, outputDir)
  .then(images => {
    console.log('Extraction complete!');
    console.log(`Extracted ${images.length} images.`);
    
    // Rename/Log images for clarity (Optional)
    // images.forEach(img => console.log(`Saved: ${img.name}`));
  })
  .catch(err => {
    console.error('Error extracting images:', err);
  });
