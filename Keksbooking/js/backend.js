"use strict";
(function () {
	var mapPin = document
		.querySelector("template")
		.content.querySelector(".map__pin");

	var onLoad = function (data) {
		window.notice = data;
		window.renderPin(window.notice);
	};

	var onError = function (message) {
		console.error(message);
	};

	var pinMainUpHandler = function () {
		window.download(
			"https://javascript.pages.academy/keksobooking/data",
			onLoad,
			onError
		);
		pinMain.removeEventListener("mouseup", pinMainUpHandler);
	};

	var pinMain = document.querySelector(".map__pin--main");
	pinMain.addEventListener("mouseup", pinMainUpHandler);
})();
