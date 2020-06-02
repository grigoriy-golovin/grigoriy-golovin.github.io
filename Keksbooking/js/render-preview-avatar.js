"use strict";

(function () {

	var inputAvatar = document.querySelector("#avatar");
	var previewImg = document
					.querySelector(".notice__preview")
					.querySelector("img");
	var reader = new FileReader();

	inputAvatar.addEventListener("change", function () {
		if (inputAvatar.files[0].type.startsWith("image")) {
			reader.readAsDataURL(inputAvatar.files[0]);

			reader.addEventListener("load", function () {
				previewImg.src = reader.result;
			});

		} else {
			previewImg.src = "img/muffin.png";
		}

	});

})();
