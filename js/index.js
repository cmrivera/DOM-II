// Your code goes here
// PRESS A KEYBOARD KEY AND THE HEADER WILL DISAPPEAR FROM VISION;
const body = document.querySelector("body");
const header = document.querySelector("header");

body.addEventListener("keydown", () => (header.style.opacity = "0"));

const navContainer = document.querySelector(".nav-container");

// ADDS AN ALERT WHEN THE USER FIRST SCROLLS WITH THE MOUSE WHEEL BUT THEM REMOVES THAT EVENT SO THEY CAN ACTUALLY NAVIGATE THE SITE
body.addEventListener("wheel", function alertMeOnce() {
  alert("WEEEEEEEEEEEE!!!!!!");
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
