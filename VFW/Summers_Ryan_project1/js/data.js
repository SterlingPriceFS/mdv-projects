//activity 2
// VFW


window.addEventListener("DOMContentLoaded", function(){
		
	//getElementByID function
	function &(x){
		var theElement = document.getElementByID(x);
		return theElement;	
	};
	
	
	//Variable Defaults
	var skillSet = [ "appchoice", "strength", "intelligence", "endurance" ];
	
	
	//Set Link& Submit CLick Events
	var displayLink = $("displayLink");
	displayLink.addEventListener("click", getData); //getData will be a function
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);
		
	
	
	
	
	
}); 