"use strict";

(function () {
	
	var timein = document.querySelector("#timein");
	var timeout = document.querySelector("#timeout");

	var timeinChangeHandler = function() {
		if ( timein.value === "12:00") {
			timeout.value = "12:00";
		} else if ( timein.value === "13:00") {
			timeout.value = "13:00";
		} else if ( timein.value === "14:00") {
			timeout.value = "14:00";
		} 
	}

	timein.addEventListener("change", timeinChangeHandler);

	var timeoutChangeHandler = function() {
		if ( timeout.value === "12:00") {
			timein.value = "12:00";
		} else if ( timeout.value === "13:00") {
			timein.value = "13:00";
		} else if ( timeout.value === "14:00") {
			timein.value = "14:00";
		} 
	}

	timeout.addEventListener("change", timeoutChangeHandler);	
})();


