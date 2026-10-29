import { test, expect } from '@playwright/test';

test('Verify Playwright Page', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    // Verify title
    await expect(page).toHaveTitle(/Playwright/);

    // Verify URL
    await expect(page).toHaveURL('https://playwright.dev/');
});