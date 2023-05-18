import LoginPage from "../page-objects/Login.page.js";

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
});
