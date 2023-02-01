const nav = document.querySelector('.nav_bg')
const mobileMenuBars = document.querySelectorAll('.menu__mobile-menu--top,.menu__mobile-menu--middle,.menu__mobile-menu--bottom')
const mobileArea = document.querySelector('.menu__mobile-menu--area')
const mobileMenu = document.querySelector('.menu__mobile-menu')


const cookies = document.querySelector('.cookie')
const cookiesBtn = document.querySelector('.cookie--btn')

const checkCookiesAcceptance = () => {
	localStorage.getItem('cookiesAccepted') ? cookies.classList.add('hide'): false;
}

const handleNavColor = () => {
	if (window.scrollY >= 144) {
		nav.classList.add('nav_bg--color')
		mobileMenuBars.forEach(el => {
			el.style.backgroundColor = '#fff'
		})
	} else {
		nav.classList.remove('nav_bg--color')
		mobileMenuBars.forEach(el => {
			el.style.removeProperty('background-color')
		})
	}
}

const handleMenu = () => {
	mobileArea.classList.toggle('active')
	mobileMenuBars[0].classList.toggle('top-show')
	mobileMenuBars[1].classList.toggle('middle-show')
	mobileMenuBars[2].classList.toggle('bottom-show')
}


const hideCookies = () => {
	localStorage.setItem('cookiesAccepted', true);
	checkCookiesAcceptance();
}

window.addEventListener('scroll', handleNavColor)
mobileMenu.addEventListener('click', handleMenu)


cookiesBtn.addEventListener('click', hideCookies)
checkCookiesAcceptance()