let sidebarButton = document.getElementById("sidebarButton");
let mobile_sidebar = document.querySelector(".mobile_sidebar");
let closeSidebarButton = document.getElementById("closeSidebarButton");

sidebarButton.addEventListener("click", openSideBar);
closeSidebarButton.addEventListener("click", closeSidebar);

function openSideBar() {
  mobile_sidebar.style.width = "90%";
  mobile_sidebar.style.opacity = 1;
  document.body.style.background = "rgba(0,0,0,0.8)";
}

function closeSidebar() {
  mobile_sidebar.style.width = "0%";
  mobile_sidebar.style.opacity = 0;
  document.body.style.background = "none";
}
