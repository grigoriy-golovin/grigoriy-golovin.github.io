"use strict";

(function () {
	var roomNumber = document.querySelector("#room_number");
	var capacity = document.querySelector("#capacity");

	var ChangeHandler = function () {
		if (roomNumber.value === "1" && capacity.value === "1") {
			capacity.setCustomValidity("");
		} else if (
			roomNumber.value === "2" &&
			(capacity.value === "1" || capacity.value === "2")
		) {
			capacity.setCustomValidity("");
		} else if (
			roomNumber.value === "3" &&
			(capacity.value === "1" ||
				capacity.value === "2" ||
				capacity.value === "3")
		) {
		} else if (roomNumber.value === "100" && capacity.value === "0") {
			capacity.setCustomValidity("");
		} else {
			capacity.setCustomValidity(
				"Количество гостей не соответствует количеству комнат"
			);
		}
	};

	roomNumber.addEventListener("change", ChangeHandler);
	capacity.addEventListener("change", ChangeHandler);
})();
