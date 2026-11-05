import { readFileSync } from "node:fs";
const listings = JSON.parse(readFileSync(new URL("../src/listings.json", import.meta.url), "utf8"));
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
  for(let i=0;i<Math.ceil(listings.length/12)-1;i++) await page.getByRole("button",{name:"Show more listings"}).click();
  const all = await platforms.allTextContents();
  expect(all).toHaveLength(listings.length);
  expect(all.filter(t=>t.includes("Oceanpoint"))).toHaveLength(listings.filter((l:any)=>l.platform==="Oceanpoint").length);
  for(let i=0;i<all.length-6;i++) expect(all.slice(i,i+7).some(t=>t.includes("Oceanpoint"))).toBe(true);
  await page.reload();
  await page.locator("#f-sort").selectOption("min");
  expect((await platforms.allTextContents()).every(t=>t.includes("Lofty"))).toBe(true);
  await page.locator("#f-platform").selectOption("Oceanpoint");
  expect((await platforms.allTextContents()).every(t=>t.includes("Oceanpoint"))).toBe(true);
});

test('clarity cleanup keeps secondary detail on demand and metrics explicit', async ({page}) => {
  await page.goto('/');
  await expect(page.locator('#f-country')).toHaveCount(0);
  await expect(page.locator('#about')).toBeAttached();
  await expect(page.locator('#methodology')).toHaveCount(0);
  await expect(page.locator('.sb-below-hero')).toHaveCount(0);
  await expect(page.locator('.sb-index-banner')).toBeHidden();
  await expect(page.locator('.sb-metric-guide')).toHaveCount(0);
  await expect(page.locator('.sb-directory-data-notes > summary')).not.toContainText('Partial catalogue');
  await expect(page.locator('.sb-result-line')).not.toContainText('Not live quotes');
  await expect(page.locator('.sb-compare-strip')).toHaveCount(0);
  await expect(page.locator('.sb-card-status').first()).toContainText('Secondary market');
  await expect(page.locator('.sb-card-headlines').first()).toContainText('Annual rent / value');
  await expect(page.locator('.sb-calc-property-hint')).toHaveCount(0);
  await expect(page.locator('.sb-calc-property')).not.toContainText('Listing context');
  await expect(page.getByRole('combobox', {name:'Choose a listing for calculator inputs'})).toBeVisible();
  await expect(page.locator('.sb-calc-scenarios .sb-calc-table')).toBeHidden();
  await page.locator('.sb-calc-scenarios > summary').click();
  await expect(page.locator('.sb-calc-scenarios .sb-calc-table')).toBeVisible();
  await page.locator('.sb-directory-data-notes > summary').click();
  await expect(page.locator('.sb-index-banner')).toBeVisible();
  await page.locator('.sb-property input').first().check();
  await expect(page.locator('.sb-compare-strip')).toBeVisible();
  await expect(page.locator('.sb-footer-signup')).toHaveCount(0);
});

for (const width of [390, 1440]) {
  test(`hero leads directly into directory at ${width}px`, async ({page}) => {
    await page.setViewportSize({width,height:820});
    await page.goto('/');
    const gap = await page.evaluate(() => {
      const hero = document.querySelector('.sb-hero')!.getBoundingClientRect();
      const directory = document.querySelector('#compare')!.getBoundingClientRect();
      const heading = document.querySelector('.sb-directory-head')!.getBoundingClientRect();
      return {outer:directory.top-hero.bottom, inner:heading.top-directory.top};
    });
    expect(gap.outer).toBe(0);
    expect(gap.inner).toBeLessThanOrEqual(32);
  });
}

for (const [width, height] of [[1440, 820], [1440, 1000], [1920, 1080], [390, 844]]) {
  test(`red opening fills viewport ${width}x${height}`, async ({page}) => {
    await page.setViewportSize({width,height});
    await page.goto('/');
    const bounds = await page.evaluate(() => ({
      directory: document.querySelector('#compare')!.getBoundingClientRect().top,
      hero: document.querySelector('.sb-hero')!.getBoundingClientRect().bottom,
      viewport: innerHeight
    }));
    expect(bounds.hero).toBeGreaterThanOrEqual(bounds.viewport-1);
    expect(bounds.directory).toBeGreaterThanOrEqual(bounds.viewport-1);
    await page.getByRole('link',{name:'Compare listings',exact:false}).first().click();
    await expect(page.locator('#compare')).toBeInViewport();
  });
}

test('hero property value is derived from published valuations and opens scope', async ({page}) => {
  await page.goto('/');
  const value = listings.filter((l:any)=>!l.delisted).reduce((sum:number,l:any)=>sum+(Number((l.valuation||'').replace(/[^0-9.]/g,''))||0),0);
  await expect(page.locator('.sb-hero-value-title')).toContainText(`$${(Math.floor(value/1e5)/10).toFixed(1)}M+ tracked across properties`);
  await expect(page.locator('.sb-hero-value-scope')).toContainText('Published property values · excludes delisted');
  await page.locator('.sb-hero-value').click();
  await expect(page.locator('#coverage-notes')).toHaveAttribute('open','');
  await expect(page.locator('.sb-index-banner')).toBeVisible();
});

for (const width of [390, 1330]) {
  test(`explicit compare opens in view without jumping on selection at ${width}px`, async ({page}) => {
    await page.setViewportSize({width, height:844});
    await page.goto('/');
    await page.locator('.sb-property input').nth(7).check();
    await page.locator('.sb-property input').nth(8).check();
    await expect(page.locator('.sb-comparison')).toHaveCount(0);
    await expect(page.locator('.sb-property input:checked')).toHaveCount(2);
    await page.getByRole('button', {name:'Compare selected', exact:true}).click();
    const heading = page.getByRole('heading', {name:'Your comparison', exact:true});
    await expect(heading).toBeFocused();
    await expect(heading).toBeInViewport();
    expect(await heading.evaluate(e=>e.getBoundingClientRect().top)).toBeGreaterThanOrEqual(0);
    await expect.poll(() => heading.evaluate(e=>e.getBoundingClientRect().top)).toBeLessThan(150);
    await expect(page.locator('.sb-comparison-options article')).toHaveCount(2);
    await page.getByRole('button', {name:'Hide comparison', exact:true}).click();
    await expect(page.locator('.sb-comparison')).toHaveCount(0);
    await page.locator('.sb-property input').nth(9).check();
    await expect(page.locator('.sb-property input:checked')).toHaveCount(3);
    await expect(page.locator('.sb-comparison')).toHaveCount(0);
    await page.getByRole('button', {name:'Compare selected', exact:true}).click();
    await expect(heading).toBeFocused();
    await expect(heading).toBeInViewport();
    await expect(page.locator('.sb-comparison-options article')).toHaveCount(3);
  });
}

test('comparison scroll respects reduced motion', async ({page}) => {
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto('/');
  await page.locator('.sb-property input').nth(7).check();
  await page.locator('.sb-property input').nth(8).check();
  await page.getByRole('button', {name:'Compare selected', exact:true}).click();
  const heading = page.getByRole('heading', {name:'Your comparison', exact:true});
  await expect(heading).toBeFocused();
  await expect(heading).toBeInViewport();
});

for (const width of [390, 1330]) {
  test(`site section links use eased scrolling at ${width}px`, async ({page}) => {
    await page.setViewportSize({width,height:844});
    await page.goto('/');
    await page.locator('.sb-hero a[href="#income"]').click();
    await page.waitForTimeout(250);
    const midway = await page.evaluate(()=>scrollY);
    expect(midway).toBeGreaterThan(0);
    expect(await page.locator('#income').evaluate(e=>e.getBoundingClientRect().top)).toBeGreaterThan(500);
    await expect.poll(()=>page.locator('#income').evaluate(e=>e.getBoundingClientRect().top)).toBeLessThan(180);
  });
}
