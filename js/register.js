function testForm(id){
	form = searchForm(id);
	test1 = verifyCountFormsFields(form,4);
	test2 = checkFormsFields(form,"email","email",true,true);
  test3 = checkFormsFields(form,"name","text",true,true);
	test4 = checkFormsFields(form,"psw","password",true,true);
  test5 = checkFormsFields(form,"psw-2","password",true,true);
	test6 = checkLinkExists("login.html");
	test7 = checkButtonContent("Clear");
	test8 = checkButtonContent("Register");
	if(test1 && test2 && test3 && test4 && test5 && test6 && test7 &&test8){
		showProcessResult("Validations results: Every validation has passed.",true);
	}
}

function searchForm(id){
	let formQuery = document.querySelector(id);
	if(formQuery){
		return formQuery;
	} else {
		showProcessResult("Searched form not found");
	}
}

//Execution starts
testForm("form");