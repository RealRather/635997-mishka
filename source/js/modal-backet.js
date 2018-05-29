var modBasket = document.querySelector(".modal-basket");
var modToogle = document.querySelector(".modal-basket__add");
var productsOpen = document.querySelector(".products__order");
var cartOpen = document.querySelector(".catalog-card__cart-link");

if (productsOpen) {
  productsOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    modBasket.classList.add("modal-basket--open");
  });
}

if (cartOpen) {
  for (var i = 0; i < cartOpen.length; i++) {
    cartOpen[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modBasket.classList.add("modal-basket--open");
    })
  }
}

modToogle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (modBasket.classList.contains("modal-basket--open")) {
    modBasket.classList.remove("modal-basket--open");
    modBasket.classList.add("modal-basket--close");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modBasket.classList.contains("modal-basket--open")) {
      modBasket.classList.remove("modal-basket--open");
      modBasket.classList.add("modal-basket--close");
    }
  }
});
