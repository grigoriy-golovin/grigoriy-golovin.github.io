"use strict";

(function () {
	
	var setupAddress = function () {
		var fieldAddress = document.querySelector("#address");
	var map = document.querySelector(".map__pins");
	fieldAddress.value = `${map.offsetWidth/2}, 375`;
	}

	setupAddress();
	
})();


