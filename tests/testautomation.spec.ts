import { test, expect } from '@playwright/test';

test('Handle Alert', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Alerts.html');

    await page.getByRole('link',{name:'Alert with OK & Cancel '}).click();

    await page.pause();

    page.on('dialog', async dialog => {

        console.log(dialog.message());

       await dialog.accept();

    });

    await page.getByRole('button', {
        name: 'click the button to display a confirm box '
    }).click();

});

test('mouse hover',async({page})=>
{
    await page.goto('https://demo.automationtesting.in/Register.html');

    await page.pause();

    const menu = page.getByRole('link',{name:'SwitchTo'});

    await menu.hover();

    await page.getByRole('link',{name:'Alerts '}).click();


    await page.getByRole('link',{name:'Alert with OK & Cancel '}).click();


    page.on('dialog',async dialog =>
    {
        console.log(dialog.message());

       //await dialog.accept();
        
    });
    await page.getByRole('button',{name:'click the button to display a confirm box '}).click();
});

test('double & right click',async({page})=>
{
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

    await page.pause();

    page.on('dialog',async dialog =>
    {
        console.log(dialog.message());

       //await dialog.accept();
        
    });

    //doubleclick

    await page.getByRole('button',{name:'Double-Click Me To See Alert '}).dblclick();

    //rightclick

    await page.locator('//*[@id="authentication"]/span').click({button:'right'});
});

test.only('drag and drop',async({page})=>
{
    await page.goto('https://demo.automationtesting.in/Static.html');

    await page.pause();

    const source = page.locator('//*[@id="angular"]');

    const target = page.locator('//*[@id="droparea"]');

    await source.dragTo(target);
});