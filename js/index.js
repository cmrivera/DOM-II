// Your code goes here
//make header vanish with keydown
const body = document.querySelector("body");
const header = document.querySelector("header");

body.addEventListener("keydown", () => (header.style.opacity = "0"));
body.addEventListener("dblclick", () => (header.style.opacity = "1"));
const navContainer = document.querySelector(".nav-container");

//alert for initial scroll
body.addEventListener("wheel", function alertMeOnce() {
  alert(
    "Welcome to the Event Obstacle Course. Number 1: press any key, after something vanishes, 2- click welcome to fun bus"
  );
  body.removeEventListener("wheel", alertMeOnce);
});
//drag fun bus to resize
const funBusBanner = document.querySelector(".intro > img");
funBusBanner.addEventListener(
  "drag",
  e => (e.target.style.transform = "scale(1.5)")
);

// send alert when window resizes
window.addEventListener("resize", () =>
  alert("Good Job! Halfway there. 4- Irritate the last picture by poking it.")
);
//click picture for a prompt
let clickPic = document.querySelector(".content-destination > img");

clickPic.addEventListener("click", function() {
  prompt("Ouch! You Poked Me!! 5-Please enter your name... ");
  alert(
    "hi please doubleClick mouse to return the header,(6) then drag the Fun Bus Banner, to find out if size matters by resizin it, then click Lets go heading (7)"
  );
});
//click welcome to fun bus heading
const instructions = document.querySelector(".intro > h2");

const newText = document.querySelector(".intro > p");

instructions.addEventListener("click", function() {
  newText.textContent = " 3-Resize the window";
});
//change textcontent when welcome to funbus is clicked
const almostDone = document.querySelector(".text-content >h2");

const newH = document.querySelector(".text-content > p");

almostDone.addEventListener("click", function() {
  newH.textContent =
    "8-What adventure awaits you? double click the pic   to find out.";
});
//poke picture and bring another prompt
const advenAwaits = document.querySelector(".img-fluid");

advenAwaits.addEventListener("dblclick", function() {
  prompt("Ouch! You like poking us !!  9- Do you have any other hobbies? ... ");
  alert("now click on the footer for your reward. ");
});
//click footer for effect
const footerGrab = document.querySelector("footer");
const footerNew = document.querySelector(".footer > p");

footerGrab.addEventListener("click", function() {
  footerNew.textContent =
    "COngratulations whoever you are on completing this!. You want your prize?  What do i look like a real website? Maybe next time! ";
});

//stop links from loading
$(".menu a").click(function(e) {
  e.preventDefault(); // stop the normal href from reloading the page.
});
