import sharp from 'sharp';
import fs from 'fs';

const inputPath = './src/assets/person/BureauKijken.webp'; // Pad naar je 9MB bestand
const outputPath = './src/assets/person/BureauKijken-optimized.webp';

async function optimizeImage() {
  try {
    console.log('🚀 Start optimalisatie...');

    await sharp(inputPath)
      .resize({ 
        width: 1400, // De foto was 3194px, 1400px is perfect voor HD schermen
        withoutEnlargement: true 
      })
      .webp({ 
        quality: 75, // Verlaagt de bestandsgrootte drastisch zonder zichtbaar verlies
        effort: 6    // Neemt extra tijd om de kleinste file te berekenen
      })
      .toFile(outputPath);

    const oldSize = (fs.statSync(inputPath).size / 1024 / 1024).toFixed(2);
    const newSize = (fs.statSync(outputPath).size / 1024).toFixed(2);

    console.log(`✅ Succes!`);
    console.log(`Van: ${oldSize} MB`);
    console.log(`Naar: ${newSize} KB`);
    console.log(`Besparing: ${(((oldSize * 1024) - newSize) / (oldSize * 1024) * 100).toFixed(1)}%`);

  } catch (error) {
    console.error('❌ Fout tijdens optimalisatie:', error);
  }
}

optimizeImage();