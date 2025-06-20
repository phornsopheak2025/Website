const menuOpentButton = document.querySelector("#menu-open-button");
const menuClosetButton = document.querySelector("#menu-close-button");

menuOpentButton.addEventListener("click", () => {
    //toggle mobile menu visitility
    document.body.classList.toggle("show-mobile-menu");
});

menuClosetButton.addEventListener("click", () => menuOpentButton.click()); 