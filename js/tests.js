function countFormsFields(form){
	items = document.querySelectorAll(".form-item");
	let count = 0
	for (let index = 0; index < items.length; index++) {
		const item = items[index];
		count ++
		}
	return count
}

function verifyCountFormsFields(form,target){
	result = countFormsFields(form);
	if(result != target){
		showProcessResult("The number of counted fields: "+ result + ", is different from the expected result: "+target+".")
		return false;
	}	else {
		return true;
	}
}

function checkFormsFields(form,name,typeCondition,labelCondition,requiredCondition){
	let typeResult;
	let labelResult;
	let requiredResult;
	let errors = false;
	items = document.querySelectorAll(form.id+ ".form-item");
	//For every form item there is
	for (let index = 0; index < items.length; index++) {
		const item = items[index];
		//For every object inside a form item div
		for (let index = 0; index < item.childElementCount; index++) {
			const element = item.children[index];
			if(element.nodeName == "LABEL" && element.getAttribute("for") == name){
				labelResult = true;
			}
			else if(element.nodeName == "INPUT" && element.name == name){
				requiredResult = element.required || false;
				typeResult = element.type;
			}
		}
	}
	if(typeResult != typeCondition){
		showProcessResult("The object :"+name+" does not have the right input type. " + typeResult +
		" is different from " + typeCondition);
		errors = true;
	}
	if(labelResult != labelCondition){
		showProcessResult("The object :"+name+" does not have a label or it is not in the right place.");
		errors = true;
	}
	if(requiredResult != requiredCondition){
		showProcessResult("The object :"+name+" does not have the right input type. " + typeResult +
		" is different from " + typeCondition);
		errors = true;
	}
	return !errors;
}

function checkLinkExists(target){
	links = document.querySelectorAll("a");
	for (let index = 0; index < links.length; index++) {
		const link = links[index];
		if(link.getAttribute("href") == target){
			return true;
		}
	}
	showProcessResult("Link with href='"+target+"' not found.")
	return false;
}

function checkButtonContent(target){
	let buttons = document.querySelectorAll("button");
	for (let index = 0; index < buttons.length; index++) {
		const button = buttons[index];
		if(button.textContent == target){
			return true;
		}
	}
	showProcessResult("Button with text='"+target+"' not found.")
	return false;
}