import { test, expect } from "@playwright/test";

test("mobile menu toggles open", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto("/");
  await expect(page.getByTestId("mobile-menu-panel")).toBeHidden();
  await page.getByTestId("mobile-menu-button").click();
  await expect(page.getByTestId("mobile-menu-panel")).toBeVisible();
});

test("booking dialog opens", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("booking-panel")).toBeHidden();
  // CtaBand mounts BookingDialog with client:visible — scroll it into view and
  // let the island hydrate before clicking so the open handler is attached.
  await page.getByTestId("open-booking").scrollIntoViewIfNeeded();
  await page.waitForFunction(() => {
    const el = document.querySelector('astro-island[component-url*="BookingDialog"]');
    return el !== null && !el.hasAttribute("ssr");
  });
  await page.getByTestId("open-booking").click();
  await expect(page.getByTestId("booking-panel")).toBeVisible();
});
