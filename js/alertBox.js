function showProcessResult(result,valid){
	resultBox = document.querySelector("#form-result");
	// Result is the text to be displayed on the alert.
	if(!result){
		resultBox.classList.remove("alert-block");
		resultBox.innerHTML = "";
	}
	else
	{
		resultBox.classList.add("alert-block");
		message = document.createElement("p");
		message.innerHTML = result;
		resultBox.appendChild(message);
	}
	// Valid is true when the alert is a success message.
	if(valid==true){
		resultBox.classList.add("alert-valid");
		resultBox.classList.remove("alert-invalid");
	}
	else{
		resultBox.classList.add("alert-invalid");
		resultBox.classList.remove("alert-valid");
	}
}