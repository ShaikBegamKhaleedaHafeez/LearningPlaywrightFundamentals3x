import { test, expect } from '@playwright/test';
import type { Locator } from '@playwright/test';
test('Verify the Web Table', async({page})=>{
    await page.goto("https://awesomeqa.com/webtable.html");
    //table[@id="customers"]/tbody/tr[5]/td[2] -
    const firstPart = "//table[@id='customers']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const columns = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

    for(let i=2;i<=rows;i++){
        for(let j=1;j<=columns;j++){
            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;

            const data = await page.locator(dynamicPath).innerText();
            console.log(data);

            if(data.includes('Helen Bennett')){
                const countryPath = `${dynamicPath}/following-sibling::td`;
                const countryText = await page.locator(countryPath).innerText();
                console.log('----------')
                console.log(`Hellen Bennett is In - ${countryText}`);
            }
        }
    }


    await page.pause();
})