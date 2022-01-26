
// humburger
const humburger = document.querySelector('.menu-open'),
	  menu = document.querySelector('.menu');
	  

humburger.addEventListener('click', ()=> {
	if (menu.classList.contains('fadeInRight') == false) {
		menu.classList.remove('fadeOutRight');
		menu.classList.remove('fadeInDown');
		menu.classList.add('fadeInRight');
		menu.classList.add('active');	
	} else {
		menu.classList.remove('fadeInDown');
		menu.classList.remove('fadeInRight');
		menu.classList.add('fadeOutRight');
	}
})

