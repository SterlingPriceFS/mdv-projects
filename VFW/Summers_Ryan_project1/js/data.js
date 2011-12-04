//activity 2
// VFW


window.addEventListener("DOMContentLoaded", function(){
		
	//getElementByID function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;	
	};
	
	//Create select field element and populate it with options
	function makeSkillSet(){
		var formTag = document.getElementsByTagName("form"),	//formTag is an array, access the form in my HTML document
			selectLi =$("select"),								// selects the list item title skilled (in my code I haven't deleted it yet)
			makeSelect = document.createElement("select");		// creates a select field
			makeSelect.setAttribute("id", "skill");				// enables us to assign an id of skill to the select field
		for(var i=0, j=skillSet.length; i<j; i++) {				// for loop cycles through array skillSet
			var makeOption = document.createElement("option");	// for each item in array, creates element option
			var optText = skillSet[i];							// accesses array we declared in JS
			makeOption.setAttribute("value", optText);			// populates that element option with a value of "optText"
			makeOption.innerHTML = optText;						// sets optText to value of array, creating the element, it's floating in JS
			makeSelect.appendChild(makeOption);					// appends the created object (option) to the select element
		}
		selectLi.appendChild(makeSelect);
	};
	
	
	//Variable Defaults
	var skillSet = [ " ", "strength", "intelligence", "endurance" ];
	
	makeSkillSet();
	
	//Set Link& Submit CLick Events
/*
	var displayLink = $("displayLink");
	displayLink.addEventListener("click", getData); //getData will be a function
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal); //clearLocal will clear local data
	var save = $("submit");
	save.addEventListener("click", saveData);
	var reset = $("reset");
	reset.addEventListener("click", resetQuest); //will only clear all fields, not local storage
*/

	
}); 