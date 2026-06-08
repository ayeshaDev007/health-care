import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1100, height: 800 } });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(400);
await page.getByRole("link", { name: "How It Works" }).first().click();
await page.waitForTimeout(1200);
await page.screenshot({ path: "shots/how-active.png", clip: { x: 0, y: 0, width: 1100, height: 360 } });
console.log("captured how-active");
await browser.close();
