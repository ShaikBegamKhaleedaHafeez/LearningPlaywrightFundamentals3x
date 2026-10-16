import{test,expect} from '@playwright/test';
test('Add a User in the Web Table',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //login
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button",{name:"Login"}).click();
    //Add an employee
    await page.locator("//a[contains(@href,'viewPimModule')]").click();
    await page.getByRole("button", { name: "Add" }).click();
    await page.locator("input[name='firstName']").fill("khaleeda");
    await page.locator("input[name='lastName']").fill("shaik");
    await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("4324");
    await page.getByRole("button",{name:"Save"}).click();

    await page.locator("//a[contains(@href,'viewPimModule')]").click();
    await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("4324");
    await page.getByRole('button', { name: ' Search ' }).click();
    await page.locator("//i[@class='oxd-icon bi-check oxd-checkbox-input-icon']").nth(1).click();
    //await page.locator("//i[@class='oxd-icon bi-trash']").click();
    await page.getByRole('button', { name: 'Delete' }).click({ force: true });
    await page.getByRole('button', { name: ' Yes, Delete ' }).click();
    await page.pause();
});
