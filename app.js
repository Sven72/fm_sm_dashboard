const button = document.getElementById("switch");
const switchBG = document.querySelector("#button span");
const cardBG = document.getElementsByTagName("article");
const colorCard = document.getElementsByClassName("DMwhite");
const colorblue = document.getElementsByClassName("DMdblue");
const topBG = document.getElementsByClassName("top");
const dividerDM = document.getElementById("divider");

button.addEventListener("click", toggler);

function toggler() {
  document.body.classList.toggle("DMbodyBG");
  switchBG.classList.toggle("DMspan");
  dividerDM.classList.toggle("visible_divider");

  for (let e of colorblue) {
    e.classList.toggle("DMdblue");
  }
  for (let e of cardBG) {
    e.classList.toggle("DMcardback");
  }
  for (let e of colorCard) {
    e.classList.toggle("DMwhiteColor");
  }
  for (let e of topBG) {
    e.classList.toggle("DMtbg");
  }
}
