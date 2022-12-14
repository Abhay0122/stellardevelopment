const menu = document.querySelector(".menu");
const menu_overlay =document.querySelector(".menu_overlay");
const cross = document.querySelector("#cross");
const right = document.querySelector(".right");
const particles =document.querySelector("#particles-js");


const t1 = new TimelineMax();


// t1.fromTo(right, 2, {width: "1000%"}, {width: "50%", linear: Power2.linear });
t1.fromTo(particles, 1.2, {width: "500vmax"}, {width: "27vmax", linear: Power2.linear })
  .fromTo(
    particles,
    1.2,
    {height: "300vmax"},
    {height: "27vmax", linear: Power2.linear}
  );

menu.addEventListener("click", function(){
    menu_overlay.style.transform= "translate(0%)"; 
});

cross.addEventListener("click", function(){
    menu_overlay.style.transform= "translatey(-100%)"; 
});