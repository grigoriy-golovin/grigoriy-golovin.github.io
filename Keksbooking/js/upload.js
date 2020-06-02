"use strict";

(function () {


window.upload = function(url, onLoad, onError, data) {

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url);

	xhr.addEventListener("load", function() {
		if (xhr.status === 200) {
		onLoad();
	} else {
		onError(`Ошибка: ${xhr.status} ${xhr.statusText}`)
	}
	});

	xhr.addEventListener("error", function() {
		onError("Ошибка соединения");
	});

	xhr.addEventListener("timeout", function() {
		onError(`запрос не выполнен за ${xhr.timeout / 1000}сек.`);
	});

	xhr.send(data);
}

})();




