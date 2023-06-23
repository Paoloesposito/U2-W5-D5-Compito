
const navb = document.querySelector(".nav");
const button = document.querySelector("button");
const discoverb = document.querySelector(".discover");

window.onscroll = () => {
    if (window.scrollY > 300) {
        navb.classList.add("nav-scroll");
        button.classList.add("button-scroll");
    } else {
        navb.classList.remove("nav-scroll");
        button.classList.remove("button-scroll");
    }

    if (window.scrollY > 860) {
        discoverb.classList.add("discover-scroll");
    } else {
        discoverb.classList.remove("discover-scroll");
    }
};
