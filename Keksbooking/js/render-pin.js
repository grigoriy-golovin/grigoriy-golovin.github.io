"use strict";
(function () {
	var mapPin = document
		.querySelector("template")
		.content.querySelector(".map__pin");


	window.renderPin = function (arr) {
		var mapPins = document.querySelector(".map__pins");
		var fragment = document.createDocumentFragment();
		var limitLength = 5;
		if (arr.length < 5) {
			limitLength = arr.length;
		}
		for (var i = 0; i < limitLength; i++) {
			fragment.append(window.createMark(arr[i]));
		}
		mapPins.append(fragment);
	};

})();
