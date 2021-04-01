function testForm(id){
	form = searchForm(id);
	test1 = verifyCountFormsFields(form,2);
	test2 = checkFormsFields(form,"email","email",true,true);
	test3 = checkFormsFields(form,"psw","password",true,true);
	test4 = checkLinkExists("register.html");
	test5 = checkButtonContent("Login");
	if(test1 == true && test2 == true && test3 == true && test4==true && test5==true){
		showProcessResult("Validations results: Every validation has passed.",true);
	}
}

function searchForm(id){
	let formQuery = document.querySelector(id);
	if(formQuery){
		return searchForm;
	}
	else
	{
		showProcessResult("Searched form not found");
	}
}

//Excecution starts
testForm("form");