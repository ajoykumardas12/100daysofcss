const search = document.getElementById("search");
const searchbar = document.getElementById("searchbar");
search.addEventListener("click", () => {
  searchbar.classList.toggle("search-active");
})

const navIcon = document.getElementById("nav-icon");
const notificationContainer = document.getElementById("notification-container");
const menu = document.getElementById("menu");

navIcon.addEventListener("click", () => {
  notificationContainer.classList.toggle("inactive");
  menu.classList.toggle("active");
})
