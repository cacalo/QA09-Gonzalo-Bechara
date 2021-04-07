function testForm(id){
	form = searchForm(id);
	test1 = verifyCountFormsFields(form,2);
	test2 = checkFormsFields(form,"email","email",true,true);
	test3 = checkFormsFields(form,"psw","password",true,true);
	test4 = checkLinkExists("register.html");
	test5 = checkButtonContent("Login");
	if(test1 && test2 && test3 && test4 && test5){
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
	document.querySelector("#psw").addEventListener("focus",hideValidationError);
	document.querySelector("#psw").addEventListener("blur",validatePassword);
}

async function fetchAsync (url) {
	let response = await fetch(url);
	let data = await response.json();
	return data;
}

//Execution starts
testForm("form");
addValidationsForm();

document.querySelector("#loginSubmit").addEventListener("click", function (e){
	e.preventDefault();
	if(!e.target.classList.contains("button-disabled")){
		console.log("Botón cickeado y desbloqueado");
		showProcessResult();
		showProcessResult("Username: " + document.querySelector("#email").value,true);
		showProcessResult("Password: " + document.querySelector("#psw").value,true);
		result = fetchAsync("https://jsonplaceholder.typicode.com/users?email="+document.querySelector("#email").value);
		const http = new XMLHttpRequest();
		http.open("GET", "https://jsonplaceholder.typicode.com/users?email="+document.querySelector("#email").value);
		http.send();
		http.onload = () => showProcessResult(http.responseText);
	}
})