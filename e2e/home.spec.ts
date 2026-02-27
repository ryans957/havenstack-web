import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("loads and shows hero title", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "HavenStack", level: 1 })).toBeVisible();
  });

  test("shows tagline and CTA", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Your Front Desk, Reinvented.")).toBeVisible();
    await expect(page.getByRole("link", { name: /Join Early Access/i })).toBeVisible();
  });

  test("footer links work", async ({ page }) => {
    await page.goto("/");
    const privacyLink = page.getByRole("link", { name: "Privacy Policy" });
    await privacyLink.scrollIntoViewIfNeeded();
    await privacyLink.click({ force: true });
    await expect(page).toHaveURL(/\/privacy/);
    await page.goto("/");
    const termsLink = page.getByRole("link", { name: "Terms of Service" });
    await termsLink.scrollIntoViewIfNeeded();
    await termsLink.click({ force: true });
    await expect(page).toHaveURL(/\/terms/);
  });
});
