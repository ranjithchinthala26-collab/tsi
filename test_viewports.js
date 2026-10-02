import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseUrl = 'http://localhost:4173';

const viewports = [
  { name: 'desktop', width: 1440, height: 900, isMobile: false, hasTouch: false },
  { name: 'laptop', width: 1366, height: 768, isMobile: false, hasTouch: false },
  { name: 'tablet', width: 768, height: 1024, isMobile: true, hasTouch: true },
  { name: 'mobile', width: 390, height: 844, isMobile: true, hasTouch: true },
  { name: 'small-mobile', width: 360, height: 800, isMobile: true, hasTouch: true },
];

async function runTests() {
  console.log('Launching browser with puppeteer-core...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const screenshotDir = path.join(process.cwd(), 'screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const results = [];

  for (const vp of viewports) {
    console.log(`\nTesting viewport: ${vp.name} (${vp.width}x${vp.height})...`);
    const page = await browser.newPage();
    await page.setViewport({
      width: vp.width,
      height: vp.height,
      isMobile: vp.isMobile,
      hasTouch: vp.hasTouch,
    });

    const consoleErrors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto(baseUrl, { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 1000));

    // Check horizontal overflow
    const overflowCheck = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      const bodyScrollWidth = document.body.scrollWidth;
      const elementsWithOverflow = [];

      document.querySelectorAll('*').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.right > docWidth + 2 && !el.closest('.animate-marquee') && !el.closest('svg')) {
          elementsWithOverflow.push({
            tag: el.tagName,
            id: el.id,
            className: el.className?.toString?.()?.slice(0, 50),
            right: rect.right,
            width: rect.width,
          });
        }
      });

      return {
        docWidth,
        scrollWidth,
        bodyScrollWidth,
        hasHorizontalOverflow: scrollWidth > docWidth || bodyScrollWidth > docWidth,
        overflowElementsCount: elementsWithOverflow.length,
        overflowElements: elementsWithOverflow.slice(0, 5),
      };
    });

    // Check key elements existence and visibility
    const checks = await page.evaluate(() => {
      return {
        hasNavbar: !!document.querySelector('nav'),
        hasHero: !!document.querySelector('section#hero, [class*="Hero"]'),
        hasStats: !!document.querySelector('[class*="Stats"], [class*="stat"]'),
        hasCampus: !!document.querySelector('#campus'),
        hasLifeAtTIS: !!document.querySelector('#life-at-tis'),
        hasAdmissionsForm: !!document.querySelector('form, #contact'),
        hasFooter: !!document.querySelector('footer'),
        hasMarquee: !!document.querySelector('.animate-marquee'),
      };
    });

    // Take top fold screenshot
    const topScreenshotPath = path.join(screenshotDir, `${vp.name}-${vp.width}x${vp.height}-hero.png`);
    await page.screenshot({ path: topScreenshotPath });

    // Scroll to Life Beyond Classroom section and take screenshot
    await page.evaluate(() => {
      const el = document.getElementById('life-at-tis');
      if (el) el.scrollIntoView();
    });
    await new Promise((r) => setTimeout(r, 800));
    const campusScreenshotPath = path.join(screenshotDir, `${vp.name}-${vp.width}x${vp.height}-life-beyond-classroom.png`);
    await page.screenshot({ path: campusScreenshotPath });

    results.push({
      viewport: vp.name,
      dimensions: `${vp.width}x${vp.height}`,
      overflowCheck,
      checks,
      consoleErrors,
    });

    await page.close();
  }

  await browser.close();

  console.log('\n================ Viewport Test Results ================');
  console.log(JSON.stringify(results, null, 2));

  const allPassed = results.every(
    (r) => !r.overflowCheck.hasHorizontalOverflow && r.consoleErrors.length === 0
  );

  if (allPassed) {
    console.log('\n🎉 ALL VIEWPORTS PASSED WITH ZERO HORIZONTAL OVERFLOW & ZERO CONSOLE ERRORS!');
  } else {
    console.log('\n⚠️ SOME ISSUES DETECTED - REVIEW ABOVE.');
  }
}

runTests().catch((err) => {
  console.error('Error running viewport tests:', err);
  process.exit(1);
});
