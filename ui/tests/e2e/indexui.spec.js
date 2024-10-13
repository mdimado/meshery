import { expect, test } from '@playwright/test';
import { ENV } from './env';

test.describe('Index Page UI Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Visit Index Page
    await page.goto(ENV.MESHERY_SERVER_URL);
  });

  test('Test if Left Navigation Panel is displayed', async ({ page }) => {
    await expect(page.locator('[data-testid=navigation]')).toBeVisible();
  });

  test('Test if Settings button is displayed', async ({ page }) => {
    await expect(page.locator('[data-testid=settings-button]')).toBeVisible();
  });

  test('Test if Notification button is displayed', async ({ page }) => {
    await expect(page.locator('[data-testid=notification-button]')).toBeVisible();
  });

  test('Test if Profile button is displayed', async ({ page }) => {
    await expect(page.locator('[data-testid=profile-button]')).toBeVisible();
  });
});
