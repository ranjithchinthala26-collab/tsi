import https from 'node:https';
import fs from 'node:fs';

const urls = [
  { url: 'https://tis.edu.in/images/tis-campus-og.jpg', dest: 'public/tis-assets/tis-campus-og.jpg' },
  { url: 'https://tis.edu.in/wp-content/uploads/2023/06/campus-view.jpg', dest: 'public/tis-assets/campus-view.jpg' },
  { url: 'https://tis.edu.in/logo.png', dest: 'public/tis-assets/logo-root.png' },
  { url: 'https://tis.edu.in/_next/static/media/Image%201.0a814859.webp', dest: 'public/tis-assets/yoga-student.webp' },
  { url: 'https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp', dest: 'public/tis-assets/shooting-student.webp' },
  { url: 'https://tis.edu.in/_next/static/media/Image%203.21dc9e69.webp', dest: 'public/tis-assets/fitness-student.webp' },
  { url: 'https://tis.edu.in/_next/static/media/swimming.6fc81e65.webp', dest: 'public/tis-assets/swimming-student.webp' },
];

for (const { url, dest } of urls) {
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => console.log('Downloaded:', dest, res.headers['content-length']));
    } else {
      console.log('Status', res.statusCode, 'for', url);
    }
  }).on('error', (e) => console.error('Error fetching', url, e.message));
}
