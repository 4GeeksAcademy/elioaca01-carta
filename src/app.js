/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //declarando variables
  let logos = ["♦", "♥", "♠", "♣"];
  let logoRandom = Math.floor(Math.random() * logos.length);
  let color = Math.floor(Math.random() * 2);

  let body = document.body;
  let carta = document.querySelector("#card");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");

  //creando carta

  carta.classList.add("card");

  carta.appendChild(div1);

  carta.appendChild(div2);

  carta.appendChild(div3);

  if (color == 0) {
    div1.classList.add("logo");
    div2.classList.add("num");
    div3.classList.add("logovolteado");
  } else {
    div1.classList.add("logored");
    div2.classList.add("numred");
    div3.classList.add("logovolteadored");
  }

  div1.textContent = logos[logoRandom];
  div2.textContent = Math.floor(Math.random() * 9) + 1;
  div3.textContent = logos[logoRandom];
};
