// Simple Node.js script to generate favicon PNGs using canvas
// Run with: node generate_favicons_simple.js
// Requires: npm install canvas

const fs = require('fs');
const { createCanvas } = require('canvas');

function generateFavicon(size, filename) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Background - Berkeley Blue
    ctx.fillStyle = '#003262';
    ctx.fillRect(0, 0, size, size);
    
    // Text - Berkeley Gold
    ctx.fillStyle = '#FDB515';
    ctx.font = `bold ${Math.floor(size * 0.35)}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('|F⟩⟨D|', size / 2, size / 2);
    
    // Save as PNG
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(filename, buffer);
    console.log(`Generated ${filename}`);
}

try {
    generateFavicon(16, 'static/favicon-16x16.png');
    generateFavicon(32, 'static/favicon-32x32.png');
    generateFavicon(180, 'static/apple-touch-icon.png');
    console.log('\nFavicons generated! Clear your browser cache and refresh to see them.');
} catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
        console.log('Canvas module not found. Install with: npm install canvas');
        console.log('\nAlternatively, open generate_favicons.html in your browser and save the images manually.');
    } else {
        console.error('Error:', error.message);
    }
}

