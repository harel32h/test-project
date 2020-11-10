var button = document.getElementById("enter");

var deleteElement = document.getElementById("delete");

var input = document.getElementById("userinput");

var ul = document.querySelector("ul");

var list = document.getElementById("list");

var doneBtn = document.createElement("BUTTON");

function inputLength(){
	return input.value.length;
}

deleteElement.addEventListener("click", function() {
	while (ul.hasChildNodes()) {  
  	ul.removeChild(ul.firstChild);
	}
})

function createListElement(){
		var li = document.createElement("li");
		var doneBtn = document.createElement("BUTTON");
		li.appendChild(document.createTextNode(input.value));
		doneBtn.appendChild(document.createTextNode("done"));
		ul.appendChild(li);
		li.appendChild(doneBtn);
		doneBtn.className = "donebtn";
		input.value = "";
}


function addListAfterClick(){
	if(inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress",addListAfterKeypress);