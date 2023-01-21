const languageOne = document.querySelector('.menu__mobile-languages--one-item')
const languageAll = document.querySelector('.menu__mobile-languages--all-items')

const showLanguages = () => {
    languageAll.classList.add('active')
    languageOne.style.display = 'none'
}

const hideLanguages = () => {
    languageAll.classList.remove('active')
    languageOne.style.display = 'block'
}

languageOne.addEventListener('mouseenter', showLanguages)
languageAll.addEventListener('mouseleave', hideLanguages)