// Your code goes here
// PRESS A KEYBOARD KEY AND THE HEADER WILL DISAPPEAR FROM VISION;
const body = document.querySelector("body");
const header = document.querySelector("header");

body.addEventListener("keydown", () => (header.style.opacity = "0"));

const navContainer = document.querySelector(".nav-container");

// ADDS AN ALERT WHEN THE USER FIRST SCROLLS WITH THE MOUSE WHEEL BUT THEM REMOVES THAT EVENT SO THEY CAN ACTUALLY NAVIGATE THE SITE
body.addEventListener("wheel", function alertMeOnce() {
  alert("Click Welcome to Fun Bus, then follow instructions!");
  body.removeEventListener("wheel", alertMeOnce);
});

const funBusBanner = document.querySelector(".intro > img");

// DRAG THE FUN-BUS INTRO IMAGE TO SCALE IT 150% IN SIZE
funBusBanner.addEventListener(
  "drag",
  e => (e.target.style.transform = "scale(1.5)")
);

// ALERTS OUCH WHENEVER THE WINDOW IS RESIZED
window.addEventListener("resize", () => alert("OUCHHHH!!!!"));

let clickPic = document.querySelector(".content-destination > img");

clickPic.addEventListener("click", function() {
  alert("You Poked Me!");
});

const instructions = document.querySelector(".intro > h2");

const newText = document.querySelector(".intro > p");

instructions.addEventListener("click", function() {
  newText.textContent =
    "Follow these Instructions<br>See How This text Changed. There is more to see.<br> 1-Press any key to see the Nav disappear.<br>2- Press the Bus Image to watch it resize.<br>3-Resize the Window to hurt its feelings.<br>4-Click Boat Image to irritate it!<br>";
});
