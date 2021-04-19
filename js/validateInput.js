let blockedFields = {
  email: false,
  psw: false,
  name: false,
  psw2: false,
};

function validateEmail(e){
  if(e.target.value != ""){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(e.target.value)){
      showValidationError(e.target);
      //console.log(typeof(blockedFields));
      blockedFields.email = true;
    } else {
      blockedFields.email = false;
    }
  } else {
    hideValidationError(e);
    blockedFields.email = true;
  }
  checkAllFields()
}

function validatePassword(e){
  if(e.target.value.length > 7){
    const re =  /^[A-Z0-9]+$/i;
    if(!re.test(e.target.value)){
      showValidationError(e.target)
      blockedFields.psw = true;
    }
    else{
      blockedFields.psw = false;
    }
  } else if (e.target.value.length > 0){
    showValidationError(e.target)
    blockedFields.psw = true;
  } else if (e.target.value.length == 0){
    blockedFields.psw = true;
  }
  checkAllFields()
}

function validateName(e){
  if(e.target.value.length > 7){
    const re =  /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/i;
    if(!re.test(e.target.value)){
      showValidationError(e.target)
      blockedFields.psw = true;
    }
    else{
      blockedFields.psw = false;
    }
  } else if (e.target.value.length > 0){
    showValidationError(e.target)
    blockedFields.psw = true;
  } else if (e.target.value.length == 0){
    blockedFields.psw = true;
  }
  checkAllFields()
}

function validatePassword2(e){
  //console.log(e.target.value + " vs " + document.querySelector("#psw").value);
  if(e.target.value == document.querySelector("#psw").value){
      blockedFields.psw2 = false;
  } else {
    showValidationError(e.target)
    blockedFields.psw2 = true;
  }
  if (e.target.value.length == 0){
    hideValidationError(e);
  }
  checkAllFields()
}

function hideValidationError(e){
  error = e.target.parentElement.querySelector(".alert-block");
  if(error){
    error.classList.remove("alert-block");
    error.classList.add("alert-hidden");
  }
}

function showValidationError(target){
  error = target.parentElement.parentElement.querySelector(".alert-hidden");
  if(error){
    error.classList.remove("alert-hidden");
    error.classList.add("alert-block");
  }
}

function checkAllFields(){
  //console.log(blockedFields);
  //Check if every key has a false value
  var result = false;
  for (var field in blockedFields) {
      if (blockedFields[field] == true) {
          result = true;
          break;
      }
    }
  if (result == true){
    //console.log("Bloqueando botón")
    blockButton("submit")
  } else {
    //console.log("Desbloqueando botón")
    unblockButton("submit")
  }
}

function blockButton(id){
  button = document.querySelector("#"+id);
  button.classList.add("button-disabled");
}

function unblockButton(id){
  button = document.querySelector("#"+id);
  button.classList.remove("button-disabled")
}