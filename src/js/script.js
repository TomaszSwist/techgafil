const nav = document.querySelector('.nav_bg')
const mobileMenuBars = document.querySelectorAll(
	'.menu__mobile-menu--top,.menu__mobile-menu--middle,.menu__mobile-menu--bottom'
)

const mobileArea = document.querySelector('.menu__mobile-menu--area')
const mobileMenu = document.querySelector('.menu__mobile-menu')

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




window.addEventListener('scroll', handleNavColor)
mobileMenu.addEventListener('click', handleMenu)
