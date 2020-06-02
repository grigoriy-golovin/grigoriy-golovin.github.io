"use strict";

(function () {

window.download = function(url, onLoad, onError) {

	var xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.responseType = "json"

	xhr.addEventListener("load", function() {
		if (xhr.status === 200) {
		onLoad(xhr.response);
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

	xhr.send();
}

})();




