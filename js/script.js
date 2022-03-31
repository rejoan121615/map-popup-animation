// initial style for animation
gsap.set(
    "#america,#china_2,#china_3,#spain_2,#france_2,#england_2,#germany_2,#netherlands_2",
    {
        opacity: 0,
        display: "none",
        scale: 0,
    }
);

gsap.set(
    [
        "#Vector_41",
        "#Vector_43",
        "#china",
        "#saudi-arabia",
        "#spain",
        "#france",
        "#england",
        "#germany",
        "#netherlands",
    ],
    {
        opacity: 1,
    }
);

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

    // condition if the country have separate state
    if (type === "array") {
        mapClass.forEach((item, index) => {
            // active color
            document
                .querySelector(item)
                .addEventListener("mouseenter", (event) => {
                    PopUpActive();
                });
            // disable color
            document
                .querySelector(item)
                .addEventListener("mouseleave", (event) => {
                    PopUpDisable();
                });
        });
    } else {
        const mapElement = document.querySelector(mapClass);
        mapElement.addEventListener("mouseenter", (event) => {
            PopUpActive();
        });

        mapElement.addEventListener("mouseleave", (event) => {
            PopUpDisable();
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
