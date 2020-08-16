"use strict";

(function () {
	var form = document.querySelector(".notice__form");

	var onLoad = function () {
		var pin = document.querySelector(".map__pin--main");
		pin.style.left = "50%";
		pin.style.top = "375px";
		form.reset();
		window.renderAddress();
		var okDiv = document.createElement("div");
		okDiv.textContent = "Данные успешно отправлены";
		okDiv.classList.add("form__ok");
		var submitButton = document.querySelector(".form__submit");
		submitButton.after(okDiv);
		setTimeout(function () {
			okDiv.remove();
		}, 4000);
	};

	var onError = function (message) {
		console.error(message);
		var errorDiv = document.createElement("div");
		errorDiv.textContent = message;
		errorDiv.classList.add("form__error");
		var submitButton = document.querySelector(".form__submit");
		submitButton.after(errorDiv);
		setTimeout(function () {
			errorDiv.remove();
		}, 2500);
	};

	var formSubmitHandler = function (evt) {
		evt.preventDefault();

		var formData = new FormData(document.querySelector(".notice__form"));

		window.upload(
			"https://javascript.pages.academy/keksobooking",
			onLoad,
			onError,
			formData
		);
	};

	form.addEventListener("submit", formSubmitHandler);
})();
