const menuBtn = document.querySelector(".menu-btn");
const siteList = document.querySelector(".site-list");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("_open");
    siteList.classList.toggle("_active");
    document.body.classList.toggle("lock");
});