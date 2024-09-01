function dashBoardJS(){
	var body = document.querySelector("body");
	body.onscroll = function () {
		viewAnime("1");
		viewAnime("2");
		viewAnime("3");
	}
	function viewAnime(ID) {
		var text1 = document.getElementById("serviceText"+ID+"_1");;
		var text2 = document.getElementById("serviceText"+ID+"_2");
		var text3 = document.getElementById("serviceText"+ID+"_3");
		var text4 = document.getElementById("serviceText"+ID+"_4");
		var specs = text1.getBoundingClientRect();
		var specs2 = text2.getBoundingClientRect();
		var specs3 = text3.getBoundingClientRect();
		var specs4 = text4.getBoundingClientRect();
		var condition1Checker = function () { return specs.top >= 0 && specs.left >= 0 && specs.right <= window.innerWidth && specs.bottom <=window.innerHeight};
		var conditionOutput1 = condition1Checker();

		var condition2Checker = function () { return specs2.top >= 0 && specs2.left >= 0 && specs2.right <= window.innerWidth && specs2.bottom <=window.innerHeight};
		var conditionOutput2 = condition2Checker();

		var condition3Checker = function () { return specs3.top >= 0 && specs3.left >= 0 && specs3.right <= window.innerWidth && specs3.bottom <=window.innerHeight};
		var conditionOutput3 = condition3Checker();

		var condition4Checker = function () { return specs4.top >= 0 && specs4.left >= 0 && specs4.right <= window.innerWidth && specs4.bottom <=window.innerHeight};
		var conditionOutput4 = condition4Checker();

		if (conditionOutput1 == true || conditionOutput2 == true || conditionOutput3 == true || conditionOutput4 == true) {
			text1.style.opacity = "100%";
			text1.style.transform = "translateY(0%)";
			text1.style.transition = "all .5s ease";
			text2.style.opacity = "100%";
			text2.style.transform = "translateY(0%)";
			text2.style.transition = "all .5s ease .2s";
			text3.style.opacity = "100%";
			text3.style.transform = "translateY(0%)";
			text3.style.transition = "all .5s ease .4s";
			text4.style.opacity = "100%";
			text4.style.transform = "translateY(0%)";
			text4.style.transition = "all .5s ease .6s";
		}
		else{
			text1.style.opacity = "0%";
			text1.style.transform = "translateY(50%)";
			text2.style.opacity = "0%";
			text2.style.transform = "translateY(50%)";
			text3.style.opacity = "0%";
			text3.style.transform = "translateY(50%)";
			text4.style.opacity = "0%";
			text4.style.transform = "translateY(50%)";
		}
	}
	var msg = "Join the study group to elevate your research skills and expand your knowledge! Dive into engaging projects, collaborate with peers, and leverage powerful educational tools.";
	var bgText = document.getElementById("bgText");
	var bgTextArray = msg.split("");
	var counter = 0;
	var displayText = setInterval(() => {
		if (counter > bgTextArray.length - 1) {
			clearInterval(displayText);
		}
		else {
			bgText.innerHTML += bgTextArray[counter];
			counter++;
		}
	},15)
}

var searchBtn = document.getElementById("searchBtn");
var catPoints = document.querySelectorAll(".catPoint");
searchBtn.onclick = function () {
	var searchModel = document.querySelector(".searchModel");
	searchModel.style.display = "flex";
	catPoints.forEach((o,index) => {
		o.addEventListener("click",() => {pointActive(index)})
	})
	pointActive(0);
}
var iconArray = ["fad fa-memo-pad","fad fa-file-circle-info","fad fa-scale-balanced","fad fa-layer-group"];
function pointActive(pointID){
	var searchCont = document.querySelector(".searchResult");
	sessionStorage.setItem("column_index",pointID);
	searchCont.innerHTML = "";
	for (var t = 0; t < 4; t++) {
		if (t == pointID) {
			catPoints[t].className = "catPoint active";
			colID = t + 2;
			var tRow = document.querySelectorAll("table tbody tr");
			for (var i = 1; i <= tRow.length; i++) {
				var col_Val = document.getElementById("col"+colID+"_"+i).innerHTML;
				var icon_Val = iconArray[t];
				createPoint(col_Val,icon_Val,i);
			}
			var colData = document.querySelectorAll(".colData");
			colData.forEach ((o,index) => {
				var counter = 0;
				var newTimer = (index * 100) + 50;
				o.style.animation = "none";
				var load_list = setInterval(() => {
					if (counter > 0) {
						clearInterval(load_list);
					}
					else{
						counter++;
						o.style.animation = "loadList .5s ease";
						o.style.opacity = "100%";
						o.style.scale = "1";
					}
				},newTimer)
			})
		}
		else{
			catPoints[t].classList.remove("active");
		}
	}
}
function createPoint(colVal,iconVal,colID){
	var searchCont = document.querySelector(".searchResult");
	var span1 = document.createElement("span");
	span1.className = "colData";
	span1.setAttribute("id","colData"+colID);
	span1.addEventListener("click", e => {
		var columnIndex = sessionStorage.getItem("column_index");
		filterTable(colVal,columnIndex);
	})
	var span2 = document.createElement("span");
	var i1 = document.createElement("i");
	i1.className = iconVal;
	var p1 = document.createElement("p");
	p1.innerHTML = colVal;
	var span3 = document.createElement("span");
	var i2 = document.createElement("i");
	i2.className = "fas fa-ellipsis-vertical";

	span2.appendChild(i1);
	span2.appendChild(p1);
	span1.appendChild(span2);
	span3.appendChild(i2);
	span1.appendChild(span3);
	searchCont.appendChild(span1);
}
var searchInput = document.getElementById("searchInput");
searchInput.oninput = function () {
	var tRow = document.querySelectorAll("table tbody tr");
	for (var r = 1; r <= tRow.length; r++) {
		var searchRow = document.getElementById("colData"+r);
		var rowVal = searchRow.querySelector("span p").innerHTML
		var searchVal = this.value;
		var regExp = new RegExp('\\b'+searchVal,'i');
		if (regExp.test(rowVal)) {
			searchRow.style.display = "flex";
		}
		else{
			searchRow.style.display = "none";
		}
	}
}

function filterTable(listVal,column_index){
	var tRow = document.querySelectorAll("table tbody tr");
	var regExp2 = new RegExp("\\b"+listVal,"i");
	var searchModel = document.querySelector(".searchModel");
	for (var u = 0; u < tRow.length; u++) {
		var column_value = tRow[u].querySelector("td:nth-child("+(parseInt(column_index) + 2)+")");
		if (regExp2.test(column_value.innerHTML)) {
			tRow[u].style.display = "table-row";
			searchModel.style.opacity = "0%";
			searchModel.style.transition = "all .4s ease";
			searchModel.style.zIndex = "0";
			var counter2 = 0;
			var removeBanner = setInterval(() => {
				if (counter2 > 0) {
					clearInterval(removeBanner);
				}
				else{
					counter2++;
					searchModel.style.display = "none";
					searchModel.style.opacity = "100%";
					searchModel.style.zIndex = "1";
				}
			},500)
		}
		else{
			tRow[u].style.display = "none";
		}
	}
}