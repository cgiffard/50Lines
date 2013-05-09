// 50 Lines
// An _actually_ minimal slide deck/show framework
// Christopher Giffard 2013
;(function() {
	"use strict";

	var s, cSlide = 0, on = "addEventListener",
		slides = [].slice.call(document.querySelectorAll("slide"),0),
		nextKeys = [13,32,38,39], prevKeys = [37,40],
		html = document.documentElement;

	function next() {
		if (cSlide < slides.length-1) slide(cSlide + 1);
	}

	function previous() {
		if (cSlide > 0) slide(cSlide - 1);
	}

	window.slide = function slide(n) {
		html.className = "slide" + (location.hash = cSlide = n = (+n|0));

		slides.forEach(function(slide,i) {
			slide.className = ["past","present","future"][i<n?0:i===n?1:2];
		});
	}

	window[on]("keyup",function(evt) {
		if (nextKeys.indexOf(evt.keyCode) > -1) next();
		if (prevKeys.indexOf(evt.keyCode) > -1) previous();
	},!1);

	window[on]("load",function() {
		slide(+location.hash.substr(1)|0 || 0);
	},!1);

	// Fullscreen body on demand
	html[on]("click",(html.webkitRequestFullScreen||html.mozRequestFullScreen),!1);
}());