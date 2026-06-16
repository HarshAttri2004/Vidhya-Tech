#!/usr/bin/env node

/**
 * Icon Generator Script for Vidhya Tech
 * 
 * This script generates all required icon sizes from your logo.png
 * 
 * Requirements:
 * npm install sharp
 * 
 * Usage:
 * node generate-icons.js
 */

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');
const SOURCE_LOGO = path.join(PUBLIC_DIR, 'logo.png');

const ICONS_TO_CREATE = [
  {
    name: 'icon-192x192.png',
    size: 192,
    description: 'PWA & Android Icon',
  },
  {
    name: 'icon-512x512.png',
    size: 512,
    description: 'PWA Splash Screen',
  },
  {
    name: 'apple-icon.png',
    size: 180,
    description: 'iOS Safari Home Screen',
  },
];

async function generateIcons() {
  console.log('🎨 Starting Icon Generation...\n');

  try {
    for (const icon of ICONS_TO_CREATE) {
      const outputPath = path.join(PUBLIC_DIR, icon.name);
      
      console.log(`📦 Creating ${icon.name} (${icon.size}x${icon.size}) - ${icon.description}`);
      
      await sharp(SOURCE_LOGO)
        .resize(icon.size, icon.size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0.5 },
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ ${icon.name} created successfully\n`);
    }

    console.log('🎉 All icons generated successfully!');
    console.log('\n📝 Generated files in /public:');
    ICONS_TO_CREATE.forEach((icon) => {
      console.log(`   ✓ ${icon.name}`);
    });
    console.log('\n💡 Next steps:');
    console.log('   1. Deploy your changes to Vercel');
    console.log('   2. Go to Google Search Console');
    console.log('   3. Click "Request Indexing" on your homepage');
    console.log('   4. Wait 24-48 hours for Google to crawl');
    console.log('   5. Check search results - "Vidhya Tech" should appear as site name!\n');
  } catch (error) {
    console.error('❌ Error generating icons:', error.message);
    process.exit(1);
  }
}

generateIcons();
