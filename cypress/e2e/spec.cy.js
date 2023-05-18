import LoginPage from "../page-objects/Login.page.js"
import ProductPage from "../page-objects/Product.page";

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
    ProductPage.shoppingCartBadge.should("have.text", "3");
  });
});
