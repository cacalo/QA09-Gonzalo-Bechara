function testForm(id){
	form = searchForm(id);
	test1 = verifyCountFormsFields(form,4);
	test2 = checkFormsFields(form,"email","email",true,true);
  test3 = checkFormsFields(form,"name","text",true,true);
	test4 = checkFormsFields(form,"psw","password",true,true);
  test5 = checkFormsFields(form,"psw2","password",true,true);
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

function addValidationsForm(){
	document.querySelector("#email").addEventListener("focus",hideValidationError);
	document.querySelector("#email").addEventListener("blur",validateEmail);
	document.querySelector("#name").addEventListener("focus",hideValidationError);
	document.querySelector("#name").addEventListener("blur",validateName);
	document.querySelector("#psw").addEventListener("focus",hideValidationError);
	document.querySelector("#psw").addEventListener("blur",validatePassword);
	document.querySelector("#psw2").addEventListener("focus",hideValidationError);
	document.querySelector("#psw2").addEventListener("blur",validatePassword2);
}

async function fetchAsync (url) {
	let response = await fetch(url);
	let data = await response.json();
	return data;
}

//Execution starts
testForm("form");
addValidationsForm();

/*
Old Event listener for register button
document.querySelector("#submit").addEventListener("click", function (e){
	e.preventDefault();
	if(!e.target.classList.contains("button-disabled")){
		showProcessResult();
		showProcessResult("Username: " + document.querySelector("#email").value,true);
		showProcessResult("Full Name: " + document.querySelector("#name").value,true);
		showProcessResult("Password: " + document.querySelector("#psw").value,true);
		showProcessResult("Password repeat: " + document.querySelector("#psw2").value,true);
		result = fetchAsync("https://jsonplaceholder.typicode.com/users?email="+document.querySelector("#email").value);
		const http = new XMLHttpRequest();
		http.open("GET", "https://jsonplaceholder.typicode.com/users?email="+document.querySelector("#email").value);
		http.send();
		http.onload = () => showProcessResult(http.responseText);
	}
})
*/
document.querySelector("#submit").addEventListener("click", function (e){
	e.preventDefault();
	if(!e.target.classList.contains("button-disabled")){
		showProcessResult();
		showProcessResult("Username: " + document.querySelector("#email").value,true);
		showProcessResult("Full Name: " + document.querySelector("#name").value,true);
		showProcessResult("Password: " + document.querySelector("#psw").value,true);
		showProcessResult("Password repeat: " + document.querySelector("#psw2").value,true);
		result = fetchAsync("https://jsonplaceholder.typicode.com/users?email="+document.querySelector("#email").value);
		const http = new XMLHttpRequest();
		//http.open("POST", "http://localhost:4000/register?email:" + document.querySelector("#email").value);
		//http.send();
		//http.onload = () => showProcessResult(http.responseText);
		fetch("http://localhost:4000/register?email=" + document.querySelector("#email").value +
		"&name=" + document.querySelector("#name").value +
		"&password="+ document.querySelector("#psw").value
		,{method: "post", mode: "no-cors"})
	}
})