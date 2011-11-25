// targeting		getElementsByTagName("tagname"); 	returns a collection
//					getElementById(("idvalue");

// create element	createElement();
// create text		createTextNode();

// add nodes			appendChild(newNode);
// delete nodes 		removeChild(node);
// insert nodes		insertBefore(newNode,oldNode);
// replace nodes		replaceChild(newNode,oldNode);

console.log("Hello World!");

window.onload = removeThree();

/*
function addLi() {
	var getUl = document.getElementById("numList");
	var newLi = document.createElement("li");
	var newLiText = document.createTextNode("Seven");
	
	newLi.appendChild(newLiText);
	getUl.appendChild(newLi);
};

function getTwo() {
	var getUl = document.getElementById("numList");
	var getLi = getUl.getElementsByTagName("li");
	var newLi = document.createElement("li");
	var newLiText = document.createTextNode("Two and Half");
	var getTwo = getLi[1];
	
	newLi.appendChild(newLiText);
	getUl.replaceChild(newLi,getTwo);
}
*/

function removeThree() {
	var getUl = document.getElementById("numList");
	var getTag = getUl.getElementsByTagName("li");
	
	if (getTag.length > 1) {
		var deleteLi = getTag.item(getTag.length-2);
		getUl.removeChild(deleteLi);
	} else {
		alert("nothing to remove??");
	}
	
/*
	var getThree = getTag[2];
	
	getUl.removeChild(getThree);
*/
}