import fs from 'node:fs';
import path from 'node:path';

const publicDir = path.join(process.cwd(), 'public');
const imagesDir = path.join(publicDir, 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 1. tis-logo.png
fs.copyFileSync(path.join(publicDir, 'tis-logo.png'), path.join(imagesDir, 'tis-logo.png'));
console.log('Copied tis-logo.png');

// 2. campus.jpg (Real TIS campus with cricket field and academic hostel buildings)
fs.copyFileSync(path.join(publicDir, 'tis-assets', 'Cricket.b06b18ca.png'), path.join(imagesDir, 'campus.jpg'));
console.log('Created campus.jpg');

// 3. students.jpg (Authentic TIS students)
fs.copyFileSync(path.join(publicDir, 'tis-assets', 'football.ca61e5d0.png'), path.join(imagesDir, 'students.jpg'));
console.log('Created students.jpg');

// 4. sports.jpg (TIS archery at 50m range)
fs.copyFileSync(path.join(publicDir, 'tis-assets', 'archery.7a805345.png'), path.join(imagesDir, 'sports.jpg'));
console.log('Created sports.jpg');

// 5. academics.jpg (TIS student in science laboratory in school uniform)
fs.copyFileSync(path.join(publicDir, 'tis-assets', 'swimming-student.webp'), path.join(imagesDir, 'academics.jpg'));
console.log('Created academics.jpg');

// Also copy student portrait for hero/about
fs.copyFileSync(path.join(publicDir, 'tis-assets', 'AtTIS.59351600.png'), path.join(imagesDir, 'student-gurukul.png'));
fs.copyFileSync(path.join(publicDir, 'tis-assets', 'ladyInPink.c358aa8f.png'), path.join(imagesDir, 'student-female.png'));
fs.copyFileSync(path.join(publicDir, 'tis-assets', 'manInBlue.46316cbf.png'), path.join(imagesDir, 'student-male.png'));

console.log('Successfully set up all images in public/images/');
