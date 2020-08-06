"use strict";

var cardData = [
{
imgSrc: "img/sis-cities.png",
imgAlt: "sis-cities",
text: "Sis cities",
link: "https://grigoriy-golovin.github.io/six-cities",
},
{
imgSrc: "img/pixiel-hanter.png" ,
imgAlt: "pixiel-hanter",
text: "Pixiel hanter",
link: "https://grigoriy-golovin.github.io/pixel-hunter",
},
{
imgSrc: "img/keksobooking.png",
imgAlt: "Keksbooking",
text: "Keksbooking",
link: "https://grigoriy-golovin.github.io/Keksbooking",
},
{
imgSrc: "img/culture-news.png",
imgAlt: "culture-news",
text: "Culture news",
link: "https://grigoriy-golovin.github.io/culture-news",
},
{
	imgSrc: "img/pink.png",
	imgAlt: "pink",
	text: "Pink",
	link: "https://grigoriy-golovin.github.io/pink",
	},
	{
		imgSrc: "img/light.png",
		imgAlt: "light",
		text: "Light",
		link: "https://grigoriy-golovin.github.io/light",
		},
]

var cardInsert = document.querySelector(".portfolio__list");
var templateCard = document
	.querySelector("template")
	.content.querySelector(".card");

var createSlid = function (data, template) {
	var slid = template.cloneNode(true);
	slid.querySelector("img").src = data.imgSrc;
	slid.querySelector("img").alt = data.imgAlt;
	slid.querySelector(".card__text").textContent = data.text;
	slid.querySelector(".card__link").href = data.link;
		return slid;
};


cardData.forEach((element) => {
	cardInsert.append(createSlid(element, templateCard))
});


