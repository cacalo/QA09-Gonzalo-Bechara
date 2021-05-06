const registerPage = require('../pageobjects/register.page.js');

describe('Register test', () => {
  beforeAll("Open browser", () =>{
		registerPage.open();
		browser.pause(1000);
	})
  it('Should login with valid credentials',  () => {
    registerPage.register(registerPage.validEmail, registerPage.validName, registerPage.validPassword, registerPage.validPassword);
    expect(registerPage.alertBox).toHaveTextContaining(
      ["Username: " + registerPage.validEmail,"Full Name: " + registerPage.validName,
      "Password: " + registerPage.validPassword,"Password repeat:: " + registerPage.validPassword]);
  });

  it("To have the 'login href' button",  () =>{
    expect(registerPage.logInHref).toExist();
  })

  it("Error should appear when the two passwords don't match",  () =>{
    registerPage.inputPassword.setValue(registerPage.validPassword);
    registerPage.inputPassword2.setValue(registerPage.shortPassword);
    browser.keys("Tab")
    expect(registerPage.password2Error).toHaveTextContaining("Both passwords must match.");
  })
});