"use strict";

(function () {
	var filterForm = document.querySelector(".map__filters");

	var priceMap = {
		low: {
			min: 0,
			max: 10000,
		},
		middle: {
			min: 10000,
			max: 50000,
		},
		high: {
			min: 50000,
			max: Infinity,
		},
	};

	var filterChangeHandler = function () {
		window.ArrAfterFilter = window.notice
			.filter(function (item) {
				var type = filterForm.querySelector("#housing-type").value;
				return type === "any" || type === item.offer.type;
			})
			.filter(function (item) {
				var price = filterForm.querySelector("#housing-price").value;

				return (
					price === "any" ||
					(item.offer.price > priceMap[price].min &&
						item.offer.price < priceMap[price].max)
				);
			})
			.filter(function (item) {
				var rooms = filterForm.querySelector("#housing-rooms").value;
				return rooms === "any" || item.offer.rooms === parseInt(rooms, 10);
			})
			.filter(function (item) {
				var guests = filterForm.querySelector("#housing-guests").value;
				return guests === "any" || item.offer.guests === parseInt(guests, 10);
			})
			.filter(function (item) {
				var featuresNode = filterForm.querySelectorAll(
					'[name="features"]:checked'
				);
				var features = [];
				featuresNode.forEach(function (item) {
					features.push(item.value);
				});
				var isOnFeatureAll = true;
				features.forEach(function (featuresChacked) {
					var isOnFeature = item.offer.features.includes(featuresChacked);
					console.log(isOnFeature);
					if (!(isOnFeatureAll && isOnFeature)) {
						isOnFeatureAll = false;
					}
				});
				return isOnFeatureAll;
			})
			;

		console.log(window.ArrAfterFilter);

		var pins = document.querySelectorAll(".map__pin");
		for (var i = 1; i < pins.length; i++) {
			pins[i].remove();
		}

		window.renderPin(window.ArrAfterFilter);
	};

	filterForm.addEventListener("change", filterChangeHandler);
})();
