
/*
Nav Bar sticky function
*/
window.onscroll = function(){ stickOnScroll() };

var navbar = document.getElementById("navbar");
var stickThreshold = navbar.offsetTop;

function stickOnScroll() {
	if (window.pageYOffset > stickThreshold) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}