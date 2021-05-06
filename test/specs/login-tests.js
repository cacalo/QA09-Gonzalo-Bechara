const { passwordError, emailError } = require('../pageobjects/login.page.js');
const loginPage = require('../pageobjects/login.page.js');

describe('Login test', () => {
  beforeAll("Open browser", () =>{
		loginPage.open();
		browser.pause(1000);
	})
  it('should login with valid credentials',  () => {
    loginPage.login(loginPage.incorrectUsername, loginPage.incorrectPassword);
    expect(loginPage.alertBox).toHaveTextContaining("Username: " + loginPage.incorrectUsername);
  });
  it("Email too short",  () =>{
    loginPage.inputEmail.setValue(loginPage.shortUsername);
    browser.keys("Tab")
    expect(loginPage.emailErr).toHaveTextContaining("Please write a valid email address");
  })
  it("Password too short", () =>{
    loginPage.inputPassword.setValue(loginPage.shortPassword);
    browser.keys("Tab")
    expect(loginPage.passwordErr).toHaveTextContaining(
      "Your password must use only letters and numbers and it must be at least 8 characters long.");
  })
});