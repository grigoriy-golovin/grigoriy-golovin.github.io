"use strict";

(function () {
	var inputImages = document.querySelector("#images");
	var container = document.querySelector("#js-container");


	inputImages.addEventListener("change", function () {
		var oldImg = container.querySelectorAll('img');
		console.log(oldImg);
		oldImg.forEach(function(item){
			item.remove();
		})
		var isImage = true;
		for (var i = 0; i < inputImages.files.length; i++) {
			if (!inputImages.files[i].type.startsWith("image")) isImage = false;
		}

		if (isImage) {
			for (var i = 0; i < inputImages.files.length; i++) {
				let reader = new FileReader();
				reader.readAsDataURL(inputImages.files[i]);
				reader.addEventListener("load", function () {
					let preview = document.createElement("img");

					preview.src = reader.result;
					preview.width = "140";
					container.append(preview);
				});
			}
		}
	});
})();
