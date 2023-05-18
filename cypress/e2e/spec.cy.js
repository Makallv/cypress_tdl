import LoginPage from "../page-objects/Login.page.js"
import ProductPage from "../page-objects/Product.page";
import BackpackPage from "../page-objects/Backpack.page";
import { data } from "../support/data";
import CartPage  from "../page-objects/Cart.page";
import CheckoutPage from "../page-objects/Checkout.page";

describe("Saucedemo", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Scenario 1: Positive login case", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.should("be.visible");
    LoginPage.loginButton.click();
    LoginPage.loginButton.should("not.exist");
  });

  it("Scenario 2: Negative login case", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("xxxxx");
    LoginPage.loginButton.should("be.visible");
    LoginPage.loginButton.click();
    LoginPage.errorMessage.should("have.text", "Epic sadface: Username and password do not match any user in this service");
  });

  it("Scenario 3: Locked out user case", () => {
    LoginPage.username.type("locked_out_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.should("be.visible");
    LoginPage.loginButton.click();
    LoginPage.errorMessage.should("have.text", "Epic sadface: Sorry, this user has been locked out.");
  });

  it("Scenario 4: Logout case", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.should("be.visible");
    LoginPage.loginButton.click();
    ProductPage.sidebar.invoke('attr', 'aria-hidden').should('eq', 'true')
    ProductPage.burgerMenu.click();
    ProductPage.sidebar.invoke('attr', 'aria-hidden').should('eq', 'false')
    ProductPage.logoutButton.click();
    LoginPage.loginButton.should("be.visible");
  });

  it("Scenario 5: Add to cart case", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.should("be.visible");
    LoginPage.loginButton.click();
    ProductPage.sauceLabBackpackAddCartButton.should("be.visible");
    ProductPage.sauceLabBackpackAddCartButton.click();
    ProductPage.sauceLabOnesieAddCartButton.should("be.visible");
    ProductPage.sauceLabOnesieAddCartButton.click();
    ProductPage.sauceLabTShirtAddCartButton.should("be.visible");
    ProductPage.sauceLabTShirtAddCartButton.click();
    ProductPage.shoppingCartBadge.scrollIntoView().should("have.text", "3");
  });

  it("Scenario 6: Remove from cart case", () => {
    LoginPage.loginButton.should("be.visible");
    LoginPage.loginToPage('standard_user', 'secret_sauce');
    ProductPage.sauceLabBackpackAddCartButton.should("be.visible");
    ProductPage.sauceLabBackpackAddCartButton.click();
    ProductPage.shoppingCartBadge.scrollIntoView().should("have.text", "1");
    ProductPage.removeButton.should("be.visible");
    ProductPage.removeButton.click();
    ProductPage.shoppingCartBadge.should("not.exist");
  });

    it("Scenario 7: Open specific item, validate title", () => {
      LoginPage.loginButton.should("be.visible");
      LoginPage.loginToPage('standard_user', 'secret_sauce');
      ProductPage.sauceLabBackpackAddCartButton.should("be.visible");
      ProductPage.sauceLabBackpack.click();
      BackpackPage.backpackTitle.should("have.text", "Sauce Labs Backpack");
    });

    it("Scenario 8: Checkout", () => {
      LoginPage.loginButton.should("be.visible");
      LoginPage.loginToPage('standard_user', 'secret_sauce');
      ProductPage.sauceLabBackpackAddCartButton.should("be.visible");
      ProductPage.sauceLabBackpackAddCartButton.click();
      ProductPage.shoppingCartBadge.scrollIntoView().should("have.text", "1");
      ProductPage.shoppingCartBadge.click();
      CartPage.checkoutButton.click();
      CheckoutPage.firstName.type(data.UserData.firstName);
      CheckoutPage.firstName.should("have.value", data.UserData.firstName);
      CheckoutPage.lastName.type(data.UserData.lastName);
      CheckoutPage.lastName.should("have.value", data.UserData.lastName);
      CheckoutPage.postalCode.type(data.UserData.postalCode);
      CheckoutPage.postalCode.should("have.value", data.UserData.postalCode);
      CheckoutPage.continueButton.click();
      CheckoutPage.checkoutTitle.should("have.text", "Checkout: Overview");
      CheckoutPage.checkoutButton.click();
      CheckoutPage.checkoutTitle.should("have.text", "Checkout: Complete!");
    });
});
