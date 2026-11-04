import { test, expect } from "@playwright/test";
test("directory, disclosure, comparison and independent calculator", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".sb-property")).toHaveCount(12);
  await page.locator("#f-platform").selectOption("Oceanpoint");
  await page.getByRole("button", { name: "Show more properties" }).click();
  await expect(page.locator(".sb-property")).toHaveCount(21);
  await page.locator(".sb-property summary").first().click();
  await expect(page.locator(".sb-term-notes").first()).toHaveAttribute(
    "open",
    "",
  );
  await page.locator(".sb-property input").nth(0).check();
  await page.locator(".sb-property input").nth(1).check();
  await page
    .getByRole("button", { name: "Compare selected", exact: true })
    .click();
  await expect(page.locator(".sb-comparison-options article")).toHaveCount(2);
  await expect(page.getByRole("spinbutton").nth(1)).toHaveValue("8");
  await page.locator("#f-min").selectOption("50");
  await expect(page.locator(".sb-empty")).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await expect(page.locator(".sb-property")).toHaveCount(12);
});
for (const width of [320, 390, 1280]) {
  test(`layout fits ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  });
}
