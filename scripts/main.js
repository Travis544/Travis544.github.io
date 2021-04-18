/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * PUT_YOUR_NAME_HERE
 */

/** namespace. */
var rhit = rhit || {};
rhit.projects=[{name:"Joust", description:"Remake of the classic arcade game Joust.", 
imageSrc:"./Image//Joust.JPG", 
SrcCode:"",
detailUrl:""
}, 

{name:"Witcher 3.5", description:"A 2D pixel rpg based on the popular video game series The Witcher.",
imageSrc:"./Image//Witcher3.5.JPG",
SrcCode:"",
detailUrl:""
}]

/** globals */
rhit.variableName = "";

/** function and class syntax examples */
rhit.functionName = function () {
	/** function body */
};

//From https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); 
    template.innerHTML = html;
    return template.content.firstChild;
}


rhit.ProjectManager = class {
	constructor(projects) {
		this.projects=projects
	}

	generateList() {
		let container=document.querySelector("#projectListContainer")
		for(let project of this.projects){
			let card=this._createCard(project)
			container.appendChild(card)
		}
	}

	_createCard(data){
		return htmlToElement(
		`<div class="card projectCard ">
			<div class="imageContainer">
				<img class="card-img-top projectImage" src="${data.imageSrc}" alt="Card image cap">
			</div>
			<div class="card-body">
			<h5 class="card-title">${data.name}</h5>
			  <p class="card-text">${data.description}</p>
			</div>
		  </div>`)
	}
}

rhit.determineWhichPage=function(){
	if(document.querySelector("#mainPage")){
		document.querySelector("#aboutMeLink").style.color="orange"
		document.querySelector("#projectLink").style.color="white"
	
	}else if(document.querySelector("#projectPage")) {
		document.querySelector("#aboutMeLink").style.color="white"
		document.querySelector("#projectLink").style.color="orange"
		rhit.projectManager.generateList();
	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	rhit.projectManager=new rhit.ProjectManager(rhit.projects);
	rhit.determineWhichPage();

};

rhit.main();
