const Page = require('./page');

class LoginPage extends Page {
	get inputEmail () {return $("#email")}
	get inputPassword () { return $("#psw")}
	get btnSubmit () { return $('button[type="submit"]')}
	get alertBox() { return $("#form-result")}
	get emailErr () { return $("body > div > div > form > div:nth-child(1) > div.input-error")}
	get passwordErr () { return $("body > div > div > form > div:nth-child(2) > div.input-error")}

	//Test credentials
	get incorrectUsername () { return "asdqwezxc@gmail.com"}
	get shortUsername () { return "asd"}
	get incorrectPassword () { return "asdqwezxc"}
	get shortPassword () { return "asd"}

	login (username, password) {
		 this.inputEmail.setValue(username);
		 this.inputPassword.setValue(password);
		 this.btnSubmit.click();
	}

	open () {
		return super.open('login.html');
	}
}

module.exports = new LoginPage();
