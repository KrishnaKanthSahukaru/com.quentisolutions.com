// Run with: node a11y-test.js
const { AxePuppeteer } = require('@axe-core/puppeteer');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  const results = await new AxePuppeteer(page).analyze();
  console.log('Accessibility Violations:', results.violations);
  await browser.close();
})();
