import {chromium, Browser, BrowserContext, Page} from 'playwright';
import {test, expect} from '@playwright/test';
// async function run(){
//     //LEVEL 1 : Launch browser, heaviest operation, do it once
//     let browser: Browser = await chromium.launch({headless: false});
//     console.log("Browser launched", browser);
//     //LEVEL 2 : Create context - fresh session, isolated cookies
//     let context1: BrowserContext = await browser.newContext();
//     console.log("Context created", context1);
//     //LEVEL 3: Open a page
//     let page1: Page = await context1.newPage();
//     console.log("Page created", page1);

//     //cleanup - reverse order
//     await page1.close();
//     await context1.close();
//     await browser.close();
// }
// run();
test('BCP',async({page})=>{
    //LEVEL 1 : Launch browser, heaviest operation, do it once
    let browser: Browser = await chromium.launch({headless: false});
    console.log("Browser launched", browser);
    //LEVEL 2 : Create context - fresh session, isolated cookies
    let context1: BrowserContext = await browser.newContext();
    console.log("Context created", context1);
    //LEVEL 3: Open a page
    let page1: Page = await context1.newPage();
    console.log("Page created", page1);

    //cleanup - reverse order
    await page1.close();
    await context1.close();
    await browser.close();
});