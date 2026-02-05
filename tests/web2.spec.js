const {test, expect} = require('@playwright/test');

test.only('Browser context Playwright test', async({browser})=>
{
        const context = await browser.newContext();
        const page = await context.newPage();


        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        console.log(await page.title());
        await page.locator('.login-wrapper-footer-text').click();

        await page.locator('#firstName').type('ayodeji');
        await page.locator('#lastName').type('oluwaseun');
        await page.locator('#userEmail').type('ayodeji@mailsac.com');
        await page.locator('#userMobile').type('0123456789');
        const dropdown = page.locator('select.custom-select');
        await dropdown.selectOption('1: Doctor')
        await page.locator('input[type="radio"][value="Male"]').check();
        await page.locator('#userPassword').type('test12345');
        await page.locator('#confirmPassword').type('test12345');
        await page.locator('input[type="checkbox"]').click();
        await page.locator("input[type='checkbox']").check();
        await page.locator('#login').click();
       

        //await page.pause();


        //await page.locator('.custom-select.ng-pristine.ng-valid.ng-touched').click();

});

// test('@Web Client App login', async ({ page }) => {
//    //js file- Login js, DashboardPage
//    const email = "anshika@gmail.com";
//    const productName = 'zara coat 3';
//    const products = page.locator(".card-body");
//    await page.goto("https://rahulshettyacademy.com/client");
//    await page.locator("#userEmail").fill(email);
//    await page.locator("#userPassword").type("Iamking@000");
//    await page.locator("[value='Login']").click();
//    await page.waitForLoadState('networkidle');
//    await page.locator(".card-body b").first().waitFor();
//    const titles = await page.locator(".card-body b").allTextContents();
//    console.log(titles); 
 
// })