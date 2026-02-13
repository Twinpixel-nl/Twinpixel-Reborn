const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = './public/logos'; // Pas dit aan naar waar je logos map precies staat
const outputFolder = './public/logos/geoptimaliseerd';

// Maak de output map aan als die niet bestaat
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdirSync(inputFolder).forEach(file => {
    if (file.endsWith('.webp') || file.endsWith('.png') || file.endsWith('.jpg')) {
        const inputPath = path.join(inputFolder, file);
        const outputPath = path.join(outputFolder, file);

        sharp(inputPath)
            .resize(200) // Verklein naar 200px breed (hoogte gaat automatisch mee)
            .webp({ quality: 80 }) // Zorg dat het een mooi compact webp bestand blijft
            .toFile(outputPath)
            .then(() => console.log(`✅ Klaar: ${file}`))
            .catch(err => console.error(`❌ Fout bij ${file}:`, err));
    }
});