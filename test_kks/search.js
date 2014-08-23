var list;
var errorMessageElement;

function init(){
	errorMessageElement = document.getElementById("errorMessage");
	loadVideoList();
}

function loadVideoList(){
	list = new Array();
	list[0] = new Object();
	list[0].id = "CKRl1fWpZtY";
	list[0].name = "SMW Custom Music - Teresa Waltz";
	list[0].comment = "Teresa Waltz MML";
	list[0].tag = "MARIO/MUSIC";
	list[1] = new Object();
	list[1].id = "pMPvKkY0VeU";
	list[1].name = "SUPER MARIO WORLD: REVERSE ";
	list[1].comment = "Reverse World Hack";
	list[1].tag = "MARIO/GAME";
}

function makeList(){
	var tagInput = document.getElementById("tags").value;
	//no input
	if(tagInput == ""){
		errorMessageElement.innerHTML = "검색할 내용을 입력하세요.";
		return;
	}
	//includes special character(s)
	var re = new RegExp("\W");
	if(tagInput.match(re)){
		errorMessageElement.innerHTML = "언더바(_)를 제외한 특수문자는 포함할 수 없습니다.";
		return;
	}
	//errorMessageElement.innerHTML = "";
	var tag = tagInput.split(" ");
	if(tag.length == 0) alert("!!!");
	else alert(tag[0]);
}

window.addEventListener("load", init, false);