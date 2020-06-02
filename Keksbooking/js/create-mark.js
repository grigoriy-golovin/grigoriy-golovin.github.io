"use strict";
(function () {
	var mapPin = document
		.querySelector("template")
		.content.querySelector(".map__pin");

	window.createMark = function (data) {
		var mark = mapPin.cloneNode(true);
		mark.querySelector("img").src = data.author.avatar;
		mark.querySelector("img").alt = data.offer.title;
		mark.style = `left: ${data.location.x}px; top: ${data.location.y - 30}px;`;
		mark.addEventListener("click", function () {
			window.pinClickHandler(data);
		});
		return mark;
	};


})();
