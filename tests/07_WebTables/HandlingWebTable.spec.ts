import {test,expect} from '@playwright/test'
test('Find the user in the WebTable', async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    //tbody[@id='employee-body']/tr[3]/td[3]

    const firstPart = "//tbody[@id='employee-body']/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    const rows = await page.locator("//tbody[@id='employee-body']/tr").count();
    const columns = await page.locator("//tbody[@id='employee-body']/tr[1]/td").count();

    for(let i=1;i<=rows;i++){
        for(let j=1;j<=columns;j++){
            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            const data = await page.locator(dynamicPath).innerText();

            if(data.includes('Rohan Mehta')){
                const checkBox =`${dynamicPath}/preceding-sibling::td/input[@type='checkbox']`;
                await page.locator(checkBox).check();
            }
        }

    }
    await page.pause();
})