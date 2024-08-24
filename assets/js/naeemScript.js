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