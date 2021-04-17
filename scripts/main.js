/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * PUT_YOUR_NAME_HERE
 */

/** namespace. */
var rhit = rhit || {};

/** globals */
rhit.variableName = "";

/** function and class syntax examples */
rhit.functionName = function () {
	/** function body */
};

rhit.ClassName = class {
	constructor() {

	}

	methodName() {

	}
}

rhit.determineWhichPage=function(){
	if(document.querySelector("#mainPage")){
		document.querySelector("#aboutMeLink").style.color="orange"
		document.querySelector("#projectLink").style.color="white"
	
	}else if(document.querySelector("#projectPage")) {
		document.querySelector("#aboutMeLink").style.color="white"
		document.querySelector("#projectLink").style.color="orange"
	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	rhit.determineWhichPage();
};

rhit.main();
