/**
 * Image Optimization Script
 * Converts all PNG images in public/images to optimized WebP format
 * Run: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const QUALITY = 80;
const MAX_WIDTH = 1920; // Max width for any image

async function processFile(filePath) {
  if (!filePath.toLowerCase().endsWith('.png')) return;
  
  const webpPath = filePath.replace(/\.png$/i, '.webp');
  
  // Skip if webp already exists and is newer
  if (fs.existsSync(webpPath)) {
    const pngStat = fs.statSync(filePath);
    const webpStat = fs.statSync(webpPath);
    if (webpStat.mtimeMs > pngStat.mtimeMs) {
      console.log(`  SKIP: ${path.basename(filePath)} (webp is newer)`);
      return;
    }
  }

  try {
    const metadata = await sharp(filePath).metadata();
    const width = metadata.width > MAX_WIDTH ? MAX_WIDTH : undefined;
    
    await sharp(filePath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(webpPath);
    
    const originalSize = fs.statSync(filePath).size;
    const newSize = fs.statSync(webpPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(`  ✓ ${path.basename(filePath)} → .webp (${savings}% smaller)`);
  } catch (err) {
    console.error(`  ✗ ${path.basename(filePath)}: ${err.message}`);
  }
}

async function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      console.log(`\nProcessing: ${path.relative(process.cwd(), fullPath)}`);
      await walkDir(fullPath);
    } else {
      await processFile(fullPath);
    }
  }
}

console.log('🖼  Image Optimization Script');
console.log('============================\n');
console.log(`Processing: ${path.relative(process.cwd(), IMAGES_DIR)}`);
await walkDir(IMAGES_DIR);
console.log('\n✅ Done! WebP files created alongside PNGs.');
console.log('💡 Update your data files to use .webp extensions for even faster loading.');
