"use strict";

const names = ["Karen", "Ashot", "Hrayr", "Razmik", "Hakob", "Anna", "Karine", "Alina", "Armine", "Naira"];
const lastNames = [
    "Amiryan", "Asatryan", "Hovhannisyan", "Sargsyan", "Mkhitaryan",
    "Alexanyan", "Poghosyan", "Andreasyan", "Chomaryan", "Karapetyan"
];
const womens = ["Anna", "Karine", "Alina", "Armine", "Naira"];
const divs = document.querySelectorAll(".names");
const show = document.querySelector("#btn");
const dlt = document.querySelector("#dlt");
show.addEventListener("click", () => {
    for (let i = 0; i < names.length; i++) {
        let randName = Math.floor(Math.random() * names.length);
        let randLName = Math.floor(Math.random() * lastNames.length);
        if (womens.includes(names[randName])) {
            divs[1].innerHTML += `
                <h3>${names[randName]} ${lastNames[randLName]}</h3>
            `
        } else {
            divs[0].innerHTML += `
            <h3>${names[randName]} ${lastNames[randLName]}</h3>
        `
        }
    }
});
dlt.addEventListener("click", () => {
    const h3 = document.querySelectorAll(".names > h3");
    h3.forEach((element) => {
        element.remove();
    })
})