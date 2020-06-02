"use strict";

(function () {
	window.createCard = function (data) {
		var mapCardTemplate = document
			.querySelector("template")
			.content.querySelector(".map__card");

		var mapCard = mapCardTemplate.cloneNode(true);
		mapCard.querySelector("h3").textContent = data.offer.title;
		mapCard.querySelector("small").textContent = data.offer.address;
		mapCard.querySelector(
			".popup__price"
		).textContent = `${data.offer.price}₽/ночь`;

		var engToRus = {
			flat: "Квартира",
			bungalo: "Бунгало",
			house: "Дом",
			palace: "Дворец",
		};

		mapCard.querySelector("h4").textContent = engToRus[data.offer.type];

		mapCard.querySelector(
			".popup__text--capacity"
		).textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
		mapCard.querySelector(
			".popup__text--time"
		).textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;

		for (var i = 0; i < data.offer.features.length; i++) {
			var featureItim = document.createElement("li");
			featureItim.classList.add("feature");
			featureItim.classList.add(`feature--${data.offer.features[i]}`);
			mapCard.querySelector(".popup__features").append(featureItim);
		}

		mapCard.querySelector(".popup__description").textContent =
			data.offer.description;

		for (var i = 0; i < data.offer.photos.length; i++) {
			var picturesImg = document.createElement("img");
			picturesImg.src = data.offer.photos[i];
			picturesImg.width = 140;
			picturesImg.height = 140;

			var picturesLi = document.createElement("li");
			picturesLi.append(picturesImg);
			mapCard.querySelector(".popup__pictures").append(picturesLi);
		}

		mapCard.querySelector(".popup__avatar").src = data.author.avatar;

		return mapCard;
	};
})();
