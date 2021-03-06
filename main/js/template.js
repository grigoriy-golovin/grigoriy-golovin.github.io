"use strict";

const cardData = [
  {
    imgSrc: "img/sis-cities.png",
    imgAlt: "sis-cities",
    title: "Sis cities",
    link: "https://grigoriy-golovin.github.io/six-cities",
    linkCode: "https://github.com/grigoriy-golovin/six-cities",
    description: `Учебный проект на React. Сервис по поиску объявлений аренды жилья.
    Мною выполнен только JS, верстка была предоставлена.`,
    techno: `React, Jest, Enzyme, Axios, React Router, Redux, Thunk, Reselect`,
  },
  {
    imgSrc: "img/pixiel-hanter.png",
    imgAlt: "pixiel-hanter",
    title: "Pixiel hanter",
    link: "https://grigoriy-golovin.github.io/pixel-hunter",
    linkCode: "https://github.com/grigoriy-golovin/pixel-hunter",

    description: `Сайт - игра, в которой надо угадывать что
    показывают: фотография или рисунок?
    Игра написана javaScript версии ECMAScript 2015+
     без использования framework по паттерну MVP
     Мною выполнен только JS, верстка была предоставлена.`,
    techno: "ECMAScript 2015+, OOP, Promise, Fetch API",
  },
  {
    imgSrc: "img/keksobooking.png",
    imgAlt: "Keksbooking",
    title: "Keksbooking",
    link: "https://grigoriy-golovin.github.io/Keksbooking",
    linkCode: "https://github.com/grigoriy-golovin/booking",
    description: `Учебный проект на ECMAScript 5.
     Сервис размещения объявлений об аренде
     недвижимости в Токио.
     Мною выполнен только JS, верстка была предоставлена.`,
    techno: "DOM API, XMLHttpRequest, FormData",
  },
  {
    imgSrc: "img/culture-news.png",
    imgAlt: "culture-news",
    title: "Culture news",
    link: "https://grigoriy-golovin.github.io/culture-news",
    linkCode: "https://github.com/grigoriy-golovin/culture-news",
    description: `Учебная вёрстка главной страницы сайта с новостями культуры.
    Реализованна адаптивная и резиновая вёрстка с помощью Grid layout.
     На JS реализованны только слайдеры, выпадающее меню и заполнение контента в template.`,
    techno: "Less, Gulp, Flex, Picture, БЭМ, Node.js",
  },
  {
    imgSrc: "img/pink.png",
    imgAlt: "pink",
    title: "Pink",
    link: "https://grigoriy-golovin.github.io/pink",
    linkCode: "https://github.com/grigoriy-golovin/pink",
    description: `Учебная вёрстка сайта о приложении Pink.
     Вёрстка выполнена адоптивно с фиксированной сеткой
     на три размера экрана с использованием препроцессоре Less, сборка и оптимизация
     выполнены с помощью Gulp. На JS реализованны только слайдеры и выпадающее меню.`,
    techno: "Less, Gulp, Flex, Picture, SVG-спрайт, png, БЭМ, Node.js",
  },
  {
    imgSrc: "img/light.png",
    imgAlt: "light",
    title: "Light",
    link: "https://grigoriy-golovin.github.io/light",
    linkCode: "https://github.com/grigoriy-golovin/trialWork",
    description: `Моя первая учебная вёрстка. Выполнена одна страница сайта компании
     по продаже светового оборудования.
     Без реализации динамических элементов интерфейса на JS.`,
    techno: "HTML, CSS, Flex",
  },
];

const cardInsert = document.querySelector(".portfolio__list");
const templateCard = document
  .querySelector("template")
  .content.querySelector(".card");

const bgBlack =document.querySelector(`.card__bg-black`);

const createSlid = function (data, template) {
  const slid = template.cloneNode(true);
  slid.querySelector("img").src = data.imgSrc;
  slid.querySelector("img").alt = data.imgAlt;
  slid.querySelector(".card__title").textContent = data.title;
  slid.querySelector(".card__description").textContent = data.description;
  slid.querySelector(".card__text-techno").textContent = data.techno;
  slid.querySelector(".card__link--site").href = data.link;
  slid.querySelector(".card__link--code").href = data.linkCode;

  slid.querySelector(".card__text").onclick = () => {
    slid.classList.add(`card--active`);
    bgBlack.classList.add(`card__bg-black--active`)
  };

  slid.querySelector(".card__img-wrapper").onclick = () => {
    slid.classList.add(`card--active`);
    bgBlack.classList.add(`card__bg-black--active`)
  };

  slid.querySelector(".card__but-close").onclick = () => {
    slid.classList.remove(`card--active`);
    bgBlack.classList.remove(`card__bg-black--active`)
  };

  return slid;
};

cardData.forEach((element) => {
  cardInsert.append(createSlid(element, templateCard));
});

bgBlack.onclick = () => {
  document.querySelector(`.card--active`).classList.remove(`card--active`);
  bgBlack.classList.remove(`card__bg-black--active`)
}
