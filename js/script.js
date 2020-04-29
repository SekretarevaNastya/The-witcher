let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav'),
        heroContent = document.querySelectorAll('.hero'),
        heroName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
		tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
		
		 this.classList.add('is-active');
        heroName = this.getAttribute('data-hero-name');
        
        
			selectHeroContent(heroName);
			
           
    }

    function selectHeroContent(heroName) {
        heroContent.forEach(item => {
            item.classList.contains(heroName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};


tab();

/*hero.onclick = function () {
  slider.document.images["myImage"] = slider.document.images["myImage"] + hero.document.images["myImage"];
  }*/
  
let hero = document.querySelector('.hero');
let logo = document.querySelector('.logo');
let slider = document.querySelector('.slider');
let Back = document.querySelector('.Back');
let logo1 = document.querySelector('.logo1');
let line = document.querySelector('.line');



onclick = function(hero) {
    logo.style.display = 'none';
    slider.style.display = 'block';
	Back.style.display = 'block';
	logo1.style.display = 'block';
	line.style.display = 'block';
};




