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
	}
	else{
		return true;
	}
}

function checkFormsFields(form,name,typeCondition,labelCondition,requiredCondition){
	let typeResult;
	let labelResult;
	let requiredResult;
	//items = document.querySelectorAll(form.ID+" .form-item");
	items = document.querySelectorAll("form .form-item");
	//For every form item there is
	for (let index = 0; index < items.length; index++) {
		const item = items[index];
		//For every object inside a form item div
		for (let index = 0; index < item.childElementCount; index++) {
			const element = item.children[index];
			console.log(element)
			console.log(name)
			if(element.nodeName == "LABEL" && element.for == name){
				labelResult = true;
			}
			else if(element.nodeName == "INPUT" && element.name == name){
				requiredResult = element.required || false;
				typeResult = element.type;
			}
		}
	}
	console.log(typeResult, typeCondition, labelResult, labelCondition, requiredResult, requiredCondition);
	if(typeResult != typeCondition){
		showProcessResult("The object :"+name+" does not have the right input type. " + typeResult + " is different from " + typeCondition);
	}
	if(labelResult != labelCondition){
		showProcessResult("The object :"+name+" does not have a label or it is not in the right place."+ labelResult + labelCondition);
	}
	if(requiredResult != requiredCondition){
		showProcessResult("The object :"+name+" does not have the right input type. " + typeResult + " is different from " + typeCondition);
	}
	if(typeResult == typeCondition && labelResult == labelCondition && requiredResult == requiredCondition){
		console.log("Form fields passed");
		return true;
	}
}