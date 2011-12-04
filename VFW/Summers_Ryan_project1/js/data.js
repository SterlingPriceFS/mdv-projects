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

//declare items for dynamically added list
var skillSet = [ "Random", "Strength", "Intelligence", "Endurance" ];	


	function saveData() {
		var id	= Math.floor(Math.random()*100001);
		//gather up all our form field values and store in an object.
		//object properties contain array with label AND user input value
		var quest = {};
			quest.name = ["Title", $("task").value];							//creates an array inside the object for each field on our form
			quest.description = ["Description", $("description").value];		//ultimately this object will hold arrays, each array will have
			quest.dueDate = ["Due Date", $("duedate").value];					//a label for the form field, and the user input of the data
/* 			quest.dueTime = ["Specific Time", specificValue]; */
			quest.time = ["Time", $("time").value];
			quest.importance = ["Importance", $("importance").value];
			quest.skill = ["Skill Used", $("skill").value];
			quest.reward = ["Reward", $("reward").value];
			quest.difficulty = ["Difficulty", $("difficulty").value];
			quest.notes = ["Notes", $("notes").value];
		localStorage.setItem(id, JSON.stringify(quest));
		alert("Quest has been logged!");
}

makeSkillSet();
	
	//Set Link& Submit CLick Events
/*
	var displayLink = $("displayLink");
	displayLink.addEventListener("click", getData); //getData will be a function
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal); //clearLocal will clear local data
	var reset = $("reset");
	reset.addEventListener("click", resetQuest); //will only clear all fields, not local storage
*/

	var save = $("submit");
	save.addEventListener("click", saveData);  //saveData function will execute when clicked


	
}); 