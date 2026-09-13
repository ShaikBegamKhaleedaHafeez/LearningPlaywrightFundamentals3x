import {test, expect} from '@playwright/test';
import {chromium, Browser, BrowserContext, Page} from 'playwright';
test('Navigating to the tta website', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
})

test('BCP - in app.vwo.com two roles', async({page})=>{
    let browser: Browser = await chromium.launch({headless: false});
    console.log("Browser launched", browser);
    let adminContext = await browser.newContext();
    let userContext = await browser.newContext();
    let guestContext = await browser.newContext();

    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.thetestingacademy.com/playwright/");

    let userPage = await userContext.newPage();
    await userPage.goto("https://sdet.live");

    // let guestPage = await guestContext.newPage();
    // await guestPage.goto("https://scrolltest.com");

    await adminPage.close();
    await userPage.close();
    // await guestPage.close();
})