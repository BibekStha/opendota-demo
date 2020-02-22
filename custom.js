"use strict";

// Run this block of code when html is loaded
document.addEventListener("DOMContentLoaded", () => {
  let heroesEl = document.getElementById("heroes");

  fetch("https://api.opendota.com/api/heroStats")
    .then(res => {
      return res.json();
    })
    .then(data => {
      data.forEach(hero => {
        let name = hero.localized_name;
        let imageUrl = `https://api.opendota.com${hero.img}`;

        console.log(name);
        console.log(imageUrl);

        let heroEl = document.createElement("div");
        heroEl.setAttribute("class", "col col-3 p-2");

        let imageEl = document.createElement("img");
        imageEl.setAttribute("src", imageUrl);

        let nameEl = document.createElement("div");
        nameEl.setAttribute("class", "text-center");
        nameEl.innerHTML = name;

        heroEl.appendChild(imageEl);
        heroEl.appendChild(nameEl);

        heroesEl.appendChild(heroEl);
      });
    });
});
