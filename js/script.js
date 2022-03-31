const map = document.querySelectorAll(".map-america");

function AllMethods(txtClass, mapClass, type = "") {
    let text = document.querySelector(txtClass);

    // text popups
    function PopUpActive() {
        gsap.to(text, {
            opacity: 1,
            duration: 0.5,
            y: "0px",
            display: "block",
        });
    }

    function PopUpDisable() {
        gsap.to(text, {
            opacity: 0,
            duration: 0.5,
            y: "25px",
            display: "none",
        });
    }

    // map color change
    function MapColorActive(ele) {
        gsap.to(ele, {
            opacity: 1,
            duration: 0.5,
        });
        PopUpActive();
    }

    function MapColorDisable(ele) {
        gsap.to(ele, {
            opacity: 0.5,
            duration: 0.5,
        });
        PopUpDisable();
    }

    if (type === "array") {
        mapClass.forEach((item, index) => {
            // active color
            document
                .querySelector(item)
              .addEventListener("mouseenter", (event) => {
                  PopUpActive()
                    gsap.to(mapClass, {
                        opacity: 1,
                        duration: 0.5,
                    });
                });
            // disable color
            document
                .querySelector(item)
              .addEventListener("mouseleave", (event) => {
                  PopUpDisable()
                    gsap.to(mapClass, {
                        opacity: 0.5,
                        duration: 0.5,
                    });
                });
        });
    } else {
        const mapElement = document.querySelector(mapClass);

        mapElement.addEventListener("mouseenter", (event) => {
            MapColorActive(event.target);
        });

        mapElement.addEventListener("mouseleave", (event) => {
            MapColorDisable(event.target);
        });
    }
}

AllMethods("#america", ["#Vector_41", "#Vector_43"], "array");
AllMethods("#china_2", "#china");
AllMethods("#china_3", "#saudi-arabia");
AllMethods("#spain_2", "#spain");
AllMethods("#france_2", "#france");
AllMethods("#england_2", "#england");
AllMethods("#germany_2", "#germany");
AllMethods("#netherlands_2", "#netherlands");

// const data = [
//     {
//         map: "map-america",
//         text: "text-china",
//     },
// ];
