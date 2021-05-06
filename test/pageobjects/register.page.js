const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
	/**
	 * define selectors using getter methods
	 */
	get flashAlert () { return $('#flash') }

	open () {
			return super.open('register');
	}
}

module.exports = new SecurePage();
