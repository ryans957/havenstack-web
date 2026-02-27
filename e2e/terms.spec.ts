import { test, expect } from "@playwright/test";

test.describe("Terms page", () => {
  test("loads and shows title", async ({ page }) => {
    await page.goto("/terms");
    await expect(page.getByRole("heading", { name: "Terms of Service", level: 1 })).toBeVisible();
  });

  test("shows back to home link", async ({ page }) => {
    await page.goto("/terms");
    await expect(page.getByRole("link", { name: /Back to.*Home/i })).toBeVisible();
  });

  test("back to home link works", async ({ page }) => {
    await page.goto("/terms");
    await page.getByRole("link", { name: /Back to.*Home/i }).click();
    await expect(page).toHaveURL("/");
  });
});
