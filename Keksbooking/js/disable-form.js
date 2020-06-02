"use strict";

(function () {
	window.disabledForm = function () {
		var fieldsets = document.querySelectorAll("fieldset");

		for (var i = 0; i < fieldsets.length; i++) {
			fieldsets[i].setAttribute("disabled", "disabled");
		}
	};
	disabledForm();
})();
