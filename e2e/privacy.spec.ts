import { test, expect } from "@playwright/test";

test.describe("Privacy page", () => {
  test("loads and shows title", async ({ page }) => {
    await page.goto("/privacy");
    await expect(page.getByRole("heading", { name: "Privacy Policy", level: 1 })).toBeVisible();
  });

  test("shows key sections", async ({ page }) => {
    await page.goto("/privacy");
    await expect(page.getByRole("heading", { name: /Information we collect/i })).toBeVisible();
    await expect(page.getByRole("link", { name: "← Back to home" })).toBeVisible();
  });

  test("back to home link works", async ({ page }) => {
    await page.goto("/privacy");
    await page.getByRole("link", { name: "← Back to home" }).click();
    await expect(page).toHaveURL("/");
  });
});
