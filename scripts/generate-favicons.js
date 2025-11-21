// Script to help generate favicons from your logo
// You'll need to install sharp: npm install sharp

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const logoPath = path.join(__dirname, '../public/images/logo.jpg');
  const publicDir = path.join(__dirname, '../public');
  
  if (!fs.existsSync(logoPath)) {
    console.error('Logo file not found at:', logoPath);
    return;
  }

  try {
    // Generate different sizes
    const sizes = [
      { size: 16, name: 'favicon-16x16.png' },
      { size: 32, name: 'favicon-32x32.png' },
      { size: 180, name: 'apple-touch-icon.png' },
      { size: 192, name: 'android-chrome-192x192.png' },
      { size: 512, name: 'android-chrome-512x512.png' }
    ];

    for (const { size, name } of sizes) {
      await sharp(logoPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(path.join(publicDir, name));
      
      console.log(`Generated ${name}`);
    }

    // Generate ICO file (you might need a different library for this)
    console.log('Note: For favicon.ico, use an online converter or ico library');
    console.log('Convert your logo to ICO format and place it in /public/favicon.ico');
    
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

// Run if called directly
if (require.main === module) {
  generateFavicons();
}

module.exports = generateFavicons;