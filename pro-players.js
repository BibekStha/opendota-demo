"use strict";

// Run this block of code when html is loaded
document.addEventListener("DOMContentLoaded", () => {
  let proPlayersEl = document.getElementById("pro-players");

  fetch("https://api.opendota.com/api/proPlayers")
    .then(res => {
      return res.json();
    })
    .then(data => {
      // data = data.slice(0, 40);
      let counter = 0;
      try {
        data.forEach(player => {
          let name = player.personaname;
          let imageUrl = player.avatarfull;

          console.log(name);
          console.log(imageUrl);

          let playerEl = document.createElement("div");
          playerEl.setAttribute("class", "col col-2 p-2");

          let imageEl = document.createElement("img");
          imageEl.setAttribute("src", imageUrl);

          let nameEl = document.createElement("div");
          nameEl.setAttribute("class", "text-center");
          nameEl.innerHTML = name;

          playerEl.appendChild(imageEl);
          playerEl.appendChild(nameEl);

          proPlayersEl.appendChild(playerEl);

          counter += 1;
          console.log(counter);
          if (counter >= 50) {
            throw BreakException;
          }
        });
      } catch (e) {}
    });
});
