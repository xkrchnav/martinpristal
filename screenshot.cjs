const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  
  // 1. Desktop index
  let context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  let page = await context.newPage();
  await page.goto('http://localhost:4321/');
  await page.screenshot({ path: '.sisyphus/evidence/task-3-desktop.png', fullPage: true });
  await context.close();

  // 2. Mobile index
  context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  page = await context.newPage();
  await page.goto('http://localhost:4321/');
  await page.screenshot({ path: '.sisyphus/evidence/task-3-mobile.png', fullPage: true });
  await context.close();

  // 3. Tablet index
  context = await browser.newContext({ viewport: { width: 768, height: 1024 } });
  page = await context.newPage();
  await page.goto('http://localhost:4321/');
  await page.screenshot({ path: '.sisyphus/evidence/task-3-tablet.png', fullPage: true });
  await context.close();

  // 4. Desktop creative
  context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  page = await context.newPage();
  await page.goto('http://localhost:4321/creative');
  await page.screenshot({ path: '.sisyphus/evidence/task-3-creative-desktop.png', fullPage: true });
  await context.close();

  await browser.close();
  console.log("Screenshots done");
})();
