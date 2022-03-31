const map = document.querySelectorAll(".map-america");

function PopUpActive() {
    let text = document.querySelector(".text-america");
  text.style.opacity = 1;
  console.log(text)
}

function PopUpDisable() {
    let text = document.querySelector(".text-america");
    text.style.opacity = 0;
}

map[0].addEventListener("mouseenter", (event) => {
    event.target.style.opacity = 1;
    PopUpActive();
});

map[0].addEventListener("mouseleave", (event) => {
    event.target.style.opacity = 0.5;
    PopUpDisable();
});


const data = [
    {
        map: ["map-america"],
    },
];