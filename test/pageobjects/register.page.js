const Page = require('./page');

class RegisterPage extends Page {
	get inputEmail () {return $("#email")}
	get inputName () {return $("#name")}
	get inputPassword () { return $("#psw")}
	get inputPassword2 () { return $("#psw2")}
	get btnSubmit () { return $('button[type="submit"]')}
	get alertBox() { return $("#form-result")}
	get emailError () { return $("body > div > div > form > div:nth-child(1) > div:nth-child(1) > div.input-error")}
	get nameError () { return $("body > div > div > form > div:nth-child(1) > div:nth-child(2) > div.input-error")}
	get passwordError () { return $("body > div > div > form > div:nth-child(1) > div:nth-child(3) > div.input-error")}
	get password2Error () { return $("body > div > div > form > div:nth-child(1) > div:nth-child(4) > div.input-error")}
	get logInHref () { return $('a[href="login.html"]')}


	//Test credentials
	get validEmail () { return "asdqwezxc@gmail.com"}
	get shortEmail () { return "asd"}
	get validName () { return "Juan Demarchis"}
	get validPassword () { return "asdqwezxc"}
	get shortPassword () { return "asd"}

	register (email, name, password, password2 = password) {
		 this.inputEmail.setValue(email);
		 this.inputName.setValue(name);
		 this.inputPassword.setValue(password);
		 this.inputPassword2.setValue(password2);
		 this.btnSubmit.click();
	}

	open () {
		return super.open('register.html');
	}
}

module.exports = new RegisterPage();
