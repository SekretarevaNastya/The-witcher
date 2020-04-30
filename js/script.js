let logo = document.querySelector('.logo');
let hero = document.querySelector('.hero');
let slider = document.querySelector('.slider');
let Back = document.querySelector('.Back');
let logo1 = document.querySelector('.logo1');
let line = document.querySelector('.line');

hero.onclick = function () {
	logo.style.display= "none";
	slider.style.display= "block";
	Back.style.display= "block";
	logo1.style.display= "block";
	line.style.display= "block";
};