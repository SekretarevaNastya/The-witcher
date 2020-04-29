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
        
        
			selectNeroContent(heroName);
			
           
    }

    function selectNeroContent(heroName) {
        heroContent.forEach(item => {
            item.classList.contains(heroName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};


tab();






