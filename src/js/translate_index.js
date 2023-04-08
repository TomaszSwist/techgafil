const userLangFull = navigator.language || navigator.userLanguage
const userLang = userLangFull.slice(0, 2)
const choosenLanguage = localStorage.getItem('choosenLanguage')

const langs = {
	title: {
		en: 'TECHGAFIL - Cooling tubes: NNPB, PB and tube blanks',
		de: 'TECHGAFIL - Kühlrohre: NNPB, PB und Rohrrohlinge',
	},
    'meta_description': {
		en: 'Are you looking for a manufacturer of PB and NNPB cooling tubes? Need semi-finished products for your own nozzles? TECHGAFIL - manufacturer of PB, NNPB cooling nozzles.',
		de: 'Sie suchen einen Hersteller von PB- und NNPB-Kühlrohren? Benötigen Sie Halbfertigprodukte für Ihre eigenen Düsen? TECHGAFIL - Hersteller von PB-, NNPB-Kühldüsen.',
	},
    cookies: {
        en: 'Our website uses cookies!',
        de: 'Unsere Website verwendet Cookies!',
    },
    'cookies__btn': {
        en: 'I accept 🍪',
        de: 'Ich akzeptiere 🍪',
    },
    'nav-foo__products': {
        en: 'Products',
        de: 'Produkte',
    },
    'nav-foo__contact': {
        en: 'Contact',
        de: 'Kontakt',
    },
    'index__cooling-tubes': {
		en: '<span>PB</span>, <span>NNPB</span> <br> cooling nozzles.',
		de: '<span>PB</span>, <br><span>NNPB</span>-Kühldüsen.',
	},
}

let toTranslate

const translateSite = lang => {
	if (lang == 'pl') {
		window.location.reload();
	} else {
        document.querySelector('#title').innerHTML = langs.title[`${lang}`]
        document.querySelector('#meta_description').content = langs.meta_description[`${lang}`]
		toTranslate = document.querySelectorAll('.to-translate')
		console.log(toTranslate)
		toTranslate.forEach(el => {
			const id = el.getAttribute('data-translate')
			const newContent = langs[`${id}`][`${lang}`]
			el.innerHTML = newContent
		});
	}
}

if (choosenLanguage === null) {
	if (userLang == 'pl') {
	} else if (userLang == 'de') {
		document.documentElement.setAttribute('lang', 'de')
		translateSite('de')
	} else {
		document.documentElement.setAttribute('lang', 'en')
		translateSite('en')
	}
} else {
	if (choosenLanguage == 'pl') {
	} else {
		document.documentElement.setAttribute('lang', choosenLanguage)
		translateSite(choosenLanguage)
	}
}

const handleLangChange = lang => {
	document.documentElement.setAttribute('lang', lang)
	localStorage.setItem('choosenLanguage', lang)
	translateSite(lang)
}