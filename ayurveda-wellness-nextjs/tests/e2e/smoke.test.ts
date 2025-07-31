import { test, expect } from '@playwright/test';
import routeManifest from '../fixtures/route-manifest.json';

routeManifest.testing.smoke_test_routes.forEach(route => {
  test(`Smoke test for ${route.path}`, async ({ page }) => {
    await page.goto(route.path);
    // Basic check to ensure page loads without errors
    const title = await page.title();
    console.log(`Page title for ${route.path}: ${title}`);
    expect(title).not.toBe('404');
    console.log(`✅ ${route.path} loaded successfully.`);
  });
});
