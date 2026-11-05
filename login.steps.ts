import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('user is on orangehrm application', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
});

When('user enters username and password', async ({ page }) => {
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
});

When('user click login button', async ({ page }) => {
  await page.locator('button[type="submit"]').click();
});

Then('user should be able to view the dashboard', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});


