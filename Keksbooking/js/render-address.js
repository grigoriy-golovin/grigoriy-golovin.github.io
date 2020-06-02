"use strict";

(function () {
	var pin = document.querySelector(".map__pin--main");

	window.renderAddress = function () {
		// var HALF_PIN_WIDTH = 32;
		var PIN_HEIGHT = 44;

		var fieldAddress = document.querySelector("#address");
		fieldAddress.value = `${pin.offsetLeft}, ${
			pin.offsetTop + PIN_HEIGHT
		}`;
	};

	pin.addEventListener("mouseup", window.renderAddress);
})();
