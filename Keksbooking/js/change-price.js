"use strict";

(function () {
	var typeOfHousing = document.querySelector("#type");
	var price = document.querySelector("#price");

	var setPrice = function (minPrice) {
		price.min = minPrice;
		price.placeholder = minPrice;
	};

	var typeChangeHandler = function () {
		var typeValue = typeOfHousing.value;
		if (typeValue === "bungalo") {
			setPrice(0);
		} else if (typeValue === "flat") {
			setPrice(1000);
		} else if (typeValue === "house") {
			setPrice(5000);
		} else if (typeValue === "palace") {
			setPrice(10000);
		}
	};
	typeChangeHandler();
	typeOfHousing.addEventListener("change", typeChangeHandler);
})();
