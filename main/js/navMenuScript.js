var pageHeaderMenu = document.querySelector(".page-header__menu");
var pageHeaderButMenu = document.querySelector(".page-header__but-menu");


pageHeaderMenu.classList.remove("page-header__menu--no-js");
pageHeaderButMenu.classList.remove("page-header__but-menu--no-js");

pageHeaderButMenu.addEventListener("click", function () {
  if (pageHeaderMenu.classList.contains("page-header__menu--close")) {
    pageHeaderMenu.classList.remove("page-header__menu--close");
    pageHeaderMenu.classList.add("page-header__menu--open");
    pageHeaderButMenu.classList.remove("page-header__but-menu--open");
    pageHeaderButMenu.classList.add("page-header__but-menu--close");
  } else {
    pageHeaderMenu.classList.add("page-header__menu--close");
    pageHeaderMenu.classList.remove("page-header__menu--open");
    pageHeaderButMenu.classList.add("page-header__but-menu--open");
    pageHeaderButMenu.classList.remove("page-header__but-menu--close");
  }
});
