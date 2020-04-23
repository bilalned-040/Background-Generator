var h3 = document.querySelector("h3");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var body = document.getElementById("set");

function setBackground() {
	body.style.background = 
	"linear-gradient(to right, "
	+ c1.value +
	", "
	+ c2.value +
	")";
	h3.innerHTML = "background:linear-gradient(to right,"+ c1.value.toUpperCase() +","+ c2.value.toUpperCase() +")";
}

c1.addEventListener("input",setBackground);
c2.addEventListener("input",setBackground);