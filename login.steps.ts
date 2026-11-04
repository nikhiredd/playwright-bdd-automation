import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('user is on orangehrm application', async ({ page }) => {
  await page.goto('https://playwright.dev');
});

When('user enters username and password', async ({ page }) => {
  await page.locator("//input[@placeholder='Username']").fill('Admin');
  await page.locator("//input[@name='password']").fill('admin123');
});

When('user click login button', async ({ page }) => {
  await page.locator("//button[@type='submit']").click();


});

Then ('user should be able to view the dashboard', async ({page}) => {
   await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible();
});


