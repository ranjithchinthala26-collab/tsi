import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'public', 'tis-assets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const assets = [
  'schoolLogo.95f6e121.png',
  'footer-logo.230b79ff.png',
  'campus.e67b1a0a.png',
  'AtTIS.59351600.png',
  'sports.e695b690.png',
  'image3.b8273b93.png',
  'medical.e87071fe.png',
  'archery.7a805345.png',
  'horseRiding.8f259127.png',
  'shooting.b0b11d74.png',
  'swimming.d4285534.png',
  'taekwando.86e26406.png',
  'football.ca61e5d0.png',
  'billiards-single.a1e831c6.png',
  'squash.ffa0360a.png',
  'volleyball.045be884.png',
  'basketball.fa70909d.png',
  'Cricket.b06b18ca.png',
  'lawnTennis.7b3b894a.png',
  'badminton.a314ff00.png',
  'tableTennis.61f6bd56.png',
  'cycling.80dbb9b1.png',
  'hockey.219fe552.png',
  'dance.88843edb.webp',
  'pot.6f7c2ee3.webp',
  'polo.973ddbae.webp',
  'karate.4020fba5.webp',
  'ladyInPink.c358aa8f.png',
  'manInBlue.46316cbf.png',
  'madeForFuture.e96fe7c1.png',
  'SakshiMalik.91174bf4.webp',
  'VisheshBhriguvanshi.52af8bfd.webp',
  'PrakashiTomar.339dbb95.webp',
  'AbhishekVerma.18f9d349.webp',
  'AditiGopichandSwami.b7afa246.webp',
  'JeevanJyotSinghTeja.9a07711c.webp',
  'OjasPravinDeotale.1d2e01cc.webp',
  'RameshPokhriyalNishank.5f11fd77.webp',
  'DharmendraPradhan.cae1e9ae.webp',
  'TopBoarding.e5405c1a.jpg',
  'BestResidential.5173db8d.jpg',
  'UTTARAKHAND.652376d5.jpg',
  'tashi.3807cb3c.png',
  'namita.86a0f799.png',
  'sandeep.1b22b59e.png',
  'pinky.8d7145b0.png',
  'suresh.80d60e49.png',
  'urja.03e3c3f3.png',
  'amit.c7b6247e.png',
  'ashu.9d447126.png',
  'gulabdas.63ce81d8.png'
];

async function downloadAsset(filename) {
  const url = `https://tis.edu.in/_next/static/media/${filename}`;
  const dest = path.join(targetDir, filename);

  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode !== 200) {
        console.warn(`Failed ${filename}: HTTP ${res.statusCode}`);
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        resolve(false);
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
    }).on('error', (err) => {
      console.error(`Error ${filename}:`, err.message);
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      resolve(false);
    });
  });
}

async function run() {
  console.log(`Starting download of ${assets.length} TIS assets...`);
  let successCount = 0;
  for (const asset of assets) {
    const ok = await downloadAsset(asset);
    if (ok) {
      successCount++;
      process.stdout.write('.');
    } else {
      process.stdout.write('x');
    }
  }
  console.log(`\nCompleted! Successfully downloaded ${successCount}/${assets.length} assets.`);
}

run();
