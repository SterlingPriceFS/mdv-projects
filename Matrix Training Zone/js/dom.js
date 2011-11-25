// targeting		getElementsByTagName("tagname"); 	returns a collection
//					getElementById(("idvalue");

// create element	createElement();
// create text		createTextNode();

// add nodes			appendChild(newNode);
// delete nodes 		removeChild(node);
// insert nodes		insertBefore(newNode,oldNode);
// replace nodes		replaceChild(newNode,oldNode);

console.log("Hello World!");

var addLi = function () {
	var getUl = document.getElementById("numList");
	var newLi = document.createElement("li");
	var newLiText = document.createTextNode("Seven");
	
	newLi.appendChild(newLiText);
	getUl.appendChild(newLi);
};

window.onload = addLi();
