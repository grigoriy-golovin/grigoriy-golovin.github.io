"use strict";

(function () {
	var pin = document.querySelector(".map__pin--main");
	var map = document.querySelector(".map__pins");

	var startCursor = {};
	var startPin = {};

	var pinMousemoveHandler = function (moveEvt) {
		moveEvt.preventDefault();

		var moveCursor = {
			x: moveEvt.pageX,
			y: moveEvt.pageY,
		}


		pin.style.left = `calc(${startPin.x} + ${moveCursor.x - startCursor.x}px)`;
		pin.style.top  = `calc(${startPin.y} + ${moveCursor.y - startCursor.y}px)`;
	};

	var pinMouseupHandler = function (downEvt) {
		downEvt.preventDefault();
		map.removeEventListener("mousemove", pinMousemoveHandler);
		map.removeEventListener("mouseup", pinMouseupHandler);
	};

	var pinMousedownHandler = function (evt) {
		evt.preventDefault();
		startCursor.x = evt.pageX;
		startCursor.y = evt.pageY;

			startPin.x = getComputedStyle(pin).left;
			startPin.y = getComputedStyle(pin).top;


		map.addEventListener("mousemove", pinMousemoveHandler);
		map.addEventListener("mouseup", pinMouseupHandler);
	};

	pin.addEventListener("mousedown", pinMousedownHandler);
})();
