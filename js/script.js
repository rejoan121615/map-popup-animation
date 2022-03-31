// initial style for animation
gsap.set(
    "#america,#china_2,#china_3,#spain_2,#france_2,#england_2,#germany_2,#netherlands_2"
  , {
    opacity: 0,
    display: 'none',
    scale: 0
});

function AllMethods(txtClass, mapClass, type = "") {
    let text = document.querySelector(txtClass);

    // text popups
    function PopUpActive() {
        gsap.to(text, {
            opacity: 1,
            duration: 0.5,
            display: "block",
            scale: 1,
        });
    }

    function PopUpDisable() {
        gsap.to(text, {
            opacity: 0,
            duration: 0.5,
            display: "none",
            scale: 0,
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
    // condition if the country have separate state 
    if (type === "array") {
        mapClass.forEach((item, index) => {
            // active color
            document
                .querySelector(item)
                .addEventListener("mouseenter", (event) => {
                    PopUpActive();
                    gsap.to(mapClass, {
                        opacity: 1,
                        duration: 0.5,
                    });
                });
            // disable color
            document
                .querySelector(item)
                .addEventListener("mouseleave", (event) => {
                    PopUpDisable();
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

// add all the country 
AllMethods("#america", ["#Vector_41", "#Vector_43"], "array");
AllMethods("#china_2", "#china");
AllMethods("#china_3", "#saudi-arabia");
AllMethods("#spain_2", "#spain");
AllMethods("#france_2", "#france");
AllMethods("#england_2", "#england");
AllMethods("#germany_2", "#germany");
AllMethods("#netherlands_2", "#netherlands");

