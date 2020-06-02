"use strict";

(function () {
	window.renderCard = function (data) {
		var mapFiltersContainer = document.querySelector(".map__filters-container");
		mapFiltersContainer.after(window.createCard(data));
	};
})();
