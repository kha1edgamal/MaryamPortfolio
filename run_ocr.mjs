import { createWorker } from 'tesseract.js';
import fs from 'fs';
import path from 'path';

async function extract() {
  const worker = await createWorker('ara');
  const results = {};
  
  for (let i = 1; i <= 13; i++) {
    const imgPath = path.join('src', 'assets', `compcontent${i}.png`);
    if (fs.existsSync(imgPath)) {
      console.log(`Extracting from ${imgPath}...`);
      const { data: { text } } = await worker.recognize(imgPath);
      results[`compcontent${i}`] = text.trim();
      console.log(`Extracted: ${text.trim().substring(0, 50)}...`);
    } else {
      console.log(`File ${imgPath} not found.`);
      results[`compcontent${i}`] = '';
    }
  }
  
  await worker.terminate();
  fs.writeFileSync('extracted_texts.json', JSON.stringify(results, null, 2));
  console.log('Extraction complete! Data written to extracted_texts.json.');
}

extract().catch(console.error);
