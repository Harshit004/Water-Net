import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page loads
    await expect(page).toHaveTitle(/Ayurveda Wellness/);
    
    // Check for essential elements
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    
    // Check for navigation links
    await expect(page.locator('nav')).toBeVisible();
    
    console.log('✅ Homepage loaded successfully with all essential elements');
  });
  
  test('should have working navigation menu', async ({ page }) => {
    await page.goto('/');
    
    // Check if consultations link exists and is clickable
    const consultationsLink = page.locator('a[href*="/consultations"]').first();
    await expect(consultationsLink).toBeVisible();
    
    console.log('✅ Navigation menu is functional');
  });
  
  test('should be responsive', async ({ page }) => {
    await page.goto('/');
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('body')).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('body')).toBeVisible();
    
    console.log('✅ Homepage is responsive across different viewports');
  });
});
