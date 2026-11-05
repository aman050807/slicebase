import { test, expect } from "@playwright/test";
test("directory, disclosure, comparison and independent calculator", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".sb-property")).toHaveCount(12);
  await page.locator("#f-platform").selectOption("Oceanpoint");
  await page.getByRole("button", { name: "Show more listings" }).click();
  await expect(page.locator(".sb-property")).toHaveCount(21);
  await expect(page.locator(".sb-property .sb-detail-metrics").first()).toBeHidden();
  await page.locator(".sb-card-details > summary").first().click();
  await expect(page.locator(".sb-property .sb-detail-metrics").first()).toBeVisible();
  await page.locator(".sb-term-notes > summary").first().click();
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
  await expect(page.getByRole("spinbutton").nth(1)).toHaveValue("3.95");
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

for (const width of [390, 1280]) {
  test(`navbar scrolls away at ${width}px`, async ({page}) => {
    await page.setViewportSize({width, height:900});
    await page.goto('/');
    await expect(page.locator('.sb-nav')).toBeVisible();
    if(width === 390){
      await page.getByRole('button', {name:'Menu', exact:true}).click();
      await expect(page.locator('#sb-mobile-menu')).toBeVisible();
      await page.locator('#sb-mobile-menu').getByRole('link', {name:/How it works/}).click();
      await expect(page.locator('#sb-mobile-menu')).toBeHidden();
    }
    await page.locator('#how').scrollIntoViewIfNeeded();
    expect(await page.locator('.sb-nav').evaluate(e=>e.getBoundingClientRect().bottom)).toBeLessThanOrEqual(0);
    await page.locator('#top').scrollIntoViewIfNeeded();
  });
}

test("default first twelve mix platforms without overriding explicit sorting", async ({page}) => {
  await page.goto("/");
  const platforms = page.locator(".sb-property-platform");
  await expect(platforms).toHaveCount(12);
  const first = await platforms.allTextContents();
  expect(first.some(t=>t.includes("Lofty"))).toBe(true);
  expect(first.some(t=>t.includes("Oceanpoint"))).toBe(true);
  expect(first.some((t,i)=>i>0 && t===first[i-1])).toBe(true);
  for(let i=0;i<8;i++) await page.getByRole("button",{name:"Show more listings"}).click();
  const all = await platforms.allTextContents();
  expect(all).toHaveLength(105);
  expect(all.filter(t=>t.includes("Oceanpoint"))).toHaveLength(21);
  for(let i=0;i<all.length-6;i++) expect(all.slice(i,i+7).some(t=>t.includes("Oceanpoint"))).toBe(true);
  await page.reload();
  await page.locator("#f-sort").selectOption("min");
  expect((await platforms.allTextContents()).every(t=>t.includes("Lofty"))).toBe(true);
  await page.locator("#f-platform").selectOption("Oceanpoint");
  expect((await platforms.allTextContents()).every(t=>t.includes("Oceanpoint"))).toBe(true);
});
