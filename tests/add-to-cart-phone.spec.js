const { test, expect } = require("@playwright/test");

test.describe("ADD PRODUCT TO CART - PHONE (PORTRAIT)", () => {
  test("Load website, add product, and delete", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    await page.goto("http://automationpractice.com/");
    await page.locator(".cat-title").click();
    await page.locator("span[class='menu-mobile-grover'] >> nth=1").click();
    await page.locator("i[class='icon-eye-open'] >> nth=6").click();

    const fancybox = page.frameLocator(".fancybox-iframe");
    await fancybox.locator("#add_to_cart").click();

    const checkout = page.locator("//a[@title='Proceed to checkout']");
    await checkout.waitFor();
    // Without short delay there's an infinite wait for 'Proceed to checkout' button to appear.
    await delay(500);
    await page.locator("a[title='Proceed to checkout']").click();

    await page.locator("a[class='button btn btn-default standard-checkout button-medium']").click();
    await page.goBack();
    await page.locator("a[class='cart_quantity_delete']").click();
    await expect(page.locator("p[class='alert alert-warning']")).toHaveText("Your shopping cart is empty.");
  });
});
