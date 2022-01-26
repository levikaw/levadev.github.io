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

// tabs
const tabs = document.querySelectorAll('.gallery-tabs'),
	  div = document.querySelectorAll('.div');

for (let i = 0; i<tabs.length; i++){
	tabs[i].addEventListener('click', () =>{
		tabs[i].classList.toggle('active')
		div[i].classList.toggle('active')
	})
}

// Слайдер
const next = document.querySelectorAll('.right'),
	  prev = document.querySelectorAll('.left'),
	  slider = document.querySelectorAll('.slider');

let index = 0;

const removeClass = n => {
	for (let i = 0; i < slider[n].children.length; i++) {
		slider[n].children[i].classList.remove('active')
	}	
}

const nextSlide = el => {
	next[el].addEventListener('click', () => {
		if (index == slider[el].children.length - 1){
			index = 0;
			removeClass(el)
			slider[el].children[index].classList.add('active'); 
		} else {
			index++;
			removeClass(el)
			slider[el].children[index].classList.add('active');
		}
	})
}

const prevSlide = el => {
	prev[el].addEventListener('click', () => {
		if (index == 0){
			index = slider[el].children.length - 1;
			removeClass(el)
			slider[el].children[index].classList.add('active'); 
		} else {
			index--;
			removeClass(el)
			slider[el].children[index].classList.add('active');
		}
	})
}

for (let i = 0; i < next.length; i++){
	nextSlide(i)
	prevSlide(i)
}

// setInterval(nextSlide, 2000);
