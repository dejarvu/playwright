const {test, expect} = require('@playwright/test');

test('Browser context Playwright test', async({browser}) => {
        
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        console.log(await page.title());

        const userName = page.locator('#username');
        const passWord = page.locator('#password');
        const signIn = page.locator('#signInBtn');
        const cardTitles = page.locator(".card-body a");

    //css
    await userName.type('ayodeji');
    await passWord.type('ayodeji111');
    //await page.locator('.checkmark').click()
    await signIn.click();
    console.log(await page.locator('.alert.alert-danger.col-md-12').textContent());
    await expect(page.locator('.alert.alert-danger.col-md-12')).toContainText('Incorrect');
    //type - fill
    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    await passWord.fill('learning');
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});

test('Page Playwright test', async({page}) => {
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const userName = page.locator('#username');
        const passWord = page.locator('#password');
        const signIn = page.locator('#signInBtn');
        const documentLink = page.locator("[href*='documents-request']");
        const dropdown = await page.locator('select.form-control');
        await dropdown.selectOption('teach');
        await page.locator('.radiotextsty').last().click();
        await page.locator('#okayBtn').click();
        //assertion
        await expect(page.locator('.radiotextsty').last()).toBeChecked();
        await page.locator('#terms').click();
        await expect(page.locator('#terms')).toBeChecked(); 
        await page.locator('#terms').uncheck();
        await expect(page.locator('#terms')).not.toBeChecked();
        await expect(documentLink).toHaveAttribute('class', 'blinkingText');

        await page.pause();
});

test.only('Child windows open', async({browser}) => {

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const documentLink = page.locator("[href*='documents-request']");

        const [newPage] = await Promise.all([
                context.waitForEvent('page'),
                documentLink.click(),
        ])

        const text = await newPage.locator('.red').textContent();
        console.log(text);
        const arrayText = text.split('@')
        const domain = arrayText[1].split(' ')[0]
        console.log(domain);
        await page.locator('#username').type(domain);
        await page.pause();
        console.log(await page.locator('#username').inputValue());

});

