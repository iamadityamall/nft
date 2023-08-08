let searchButton = document.getElementById("searchButton");
let navbarOneSearchContainer = document.querySelector(
  ".navbarOne_searchContainer"
);
let searchContainerBackButtonMobile = document.getElementById(
  "searchContainer_backButton"
);
let searchElements = document.getElementById("searchElements");
let displayCartButton = document.getElementById("displayCartButton");
let walletMobileScreen = document.querySelector(".walletMobileScreen");
let closeCartButton = document.getElementById("closeCartButton");

displayCartButton.addEventListener("click", showCartMobile);

closeCartButton.addEventListener("click", closeCartContainer);

function closeCartContainer() {
  walletMobileScreen.style.transform = "translateY(100%)";
}

function showCartMobile() {
  walletMobileScreen.style.transform = "translateY(0)";
}

searchButton.addEventListener("click", openSearchBarMobile);

searchContainerBackButtonMobile.addEventListener("click", closeSearchBarMobile);

function openSearchBarMobile() {
  navbarOneSearchContainer.style.display = "grid";
}

function closeSearchBarMobile() {
  navbarOneSearchContainer.style.display = "none";
  searchElements.value = "";
}
