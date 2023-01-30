const productCloseBtn = document.querySelector('.product-img__close-btn')
const productPreviousBtn = document.querySelector('.product-img__left-btn')
const productNextBtn = document.querySelector('.product-img__right-btn')

const productImg = document.querySelector('.product-img')

const nnpbProductImg = document.querySelectorAll(`[data-choice="nnpb"]`)
const pbProductImg = document.querySelectorAll(`[data-choice="pb"]`)
let currentImg

const resetGalleryCurrent = () => {
	currentImg.classList.remove('product-img__box--active')
}

const setGalleryCurrent = () => {
	currentImg.classList.add('product-img__box--active')
}
const closeGallery = () => {
	productImg.style.display = 'none'
	resetGalleryCurrent()
}

const openGallery = choice => {
	currentImg = document.querySelector(`[data-choice="${choice}"][data-img-choice="1"]`)
	productImg.style.display = 'block'
	setGalleryCurrent()
}

const nextImg = () => {
	resetGalleryCurrent()
	let choice = currentImg.dataset.imgChoice
	choice++
	if (currentImg.dataset.choice == 'nnpb') {
		if (choice > nnpbProductImg.length) {
			currentImg = document.querySelector(`[data-choice="nnpb"][data-img-choice="1"]`)
		} else {
			currentImg = document.querySelector(`[data-choice="nnpb"][data-img-choice="${choice}"]`)
		}
	}
	if (currentImg.dataset.choice == 'pb') {
		if (choice > pbProductImg.length) {
			currentImg = document.querySelector(`[data-choice="pb"][data-img-choice="1"]`)
		} else {
			currentImg = document.querySelector(`[data-choice="pb"][data-img-choice="${choice}"]`)
		}
	}
	setGalleryCurrent()
}

const previousImg = () => {
	resetGalleryCurrent()
	let choice = currentImg.dataset.imgChoice
	choice--
	if (currentImg.dataset.choice == 'nnpb') {
		if (choice == 0) {
			currentImg = document.querySelector(`[data-choice="nnpb"][data-img-choice="${nnpbProductImg.length}"]`)
		} else {
			currentImg = document.querySelector(`[data-choice="nnpb"][data-img-choice="${choice}"]`)
		}
	}
	if (currentImg.dataset.choice == 'pb') {
		if (choice == 0) {
			currentImg = document.querySelector(`[data-choice="pb"][data-img-choice="${pbProductImg.length}"]`)
		} else {
			currentImg = document.querySelector(`[data-choice="pb"][data-img-choice="${choice}"]`)
		}
	}
	setGalleryCurrent()
}

productNextBtn.addEventListener('click', nextImg)
productPreviousBtn.addEventListener('click', previousImg)
productCloseBtn.addEventListener('click', closeGallery)