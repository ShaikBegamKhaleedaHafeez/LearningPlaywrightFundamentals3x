import { test, expect } from '@playwright/test';
import type { Locator } from '@playwright/test';
test('Verify the Web Table', async({page})=>{
    await page.goto("https://awesomeqa.com/webtable1.html");
    const rows = await page.locator("table[summary='Sample Table'] tbody tr");
    const rowCount = await rows.count();
    for(let i =0;i<rowCount;i++){
        const rowsData = await rows.nth(i).locator('td').allInnerTexts();
        console.log(`Row ${i+1} data: ${rowsData.join(', ')}`);
    }


    await page.pause();
})