/*
DOM Elements
*/
var navbar = document.getElementById("navbar");
var stickThreshold = navbar.offsetTop;
var enterPortal = document.getElementById("portal-enter");
var header = document.getElementById("expanding-header");

window.onbeforeunload = function() { window.scrollTo(0,0); };
//window.onload = function() { header.style.height =  window.innerHeight + "px"; };

window.onscroll = function(){ stickOnScroll() };
function stickOnScroll() {
	if (window.pageYOffset > stickThreshold) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}


enterPortal.onclick = function() { if(header.classList.contains("expanded")) collapseBanner() };
/*
function collapseBanner() {
	enterPortal.style.visibility = "hidden";
	header.style.height = header.scrollHeight + "px";
	
	document.documentElement.classList.remove("scroll-disabled");
	document.body.classList.remove("scroll-disabled");
	
	document.getElementById("home-icon").style.visibility = "visible";
	
	header.classList.add("collapsed");
	header.classList.remove("expanded");
	
	window.setTimeout(function() {
		header.style.height = "220px";
	}, 1);
	
}
*/
