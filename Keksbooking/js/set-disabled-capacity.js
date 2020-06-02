"use strict";

(function () {

	var roomNumber = document.querySelector("#room_number");
	var capacity = document.querySelector("#capacity");

	var roomChangeHandler = function() {
		if (roomNumber.value === "1") {
			capacity[0].setAttribute("disabled", "disabled");
			capacity[1].setAttribute("disabled", "disabled");
			capacity[2].removeAttribute("disabled");
			capacity[3].setAttribute("disabled", "disabled");

		} else if(roomNumber.value === "2") {
			capacity[0].setAttribute("disabled", "disabled");
			capacity[1].removeAttribute("disabled");
			capacity[2].removeAttribute("disabled");
			capacity[3].setAttribute("disabled", "disabled");

 		} else if(roomNumber.value === "3") {
			capacity[0].removeAttribute("disabled");
			capacity[1].removeAttribute("disabled");
			capacity[2].removeAttribute("disabled");
			capacity[3].setAttribute("disabled", "disabled");

		} else if(roomNumber.value === "100") {
			capacity[0].setAttribute("disabled", "disabled");
			capacity[1].setAttribute("disabled", "disabled");
			capacity[2].setAttribute("disabled", "disabled");
			capacity[3].removeAttribute("disabled");
		}
	}
	roomChangeHandler();
	roomNumber.addEventListener("change", roomChangeHandler);
})();


