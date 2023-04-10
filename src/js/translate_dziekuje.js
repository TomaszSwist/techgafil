const userLangFull = navigator.language || navigator.userLanguage
const userLang = userLangFull.slice(0, 2)
const choosenLanguage = localStorage.getItem('choosenLanguage')

const langs = {
	// title and meta
	title: {
		en: 'TECHGAFIL - Cooling tubes: NNPB, PB and tube blanks',
		de: 'TECHGAFIL - Kühlrohre: NNPB, PB und Rohrrohlinge',
	},
	// cookies
    cookies: {
        en: 'Our website uses cookies!',
        de: 'Unsere Website verwendet Cookies!',
    },
    'cookies__btn': {
        en: 'I accept 🍪',
        de: 'Ich akzeptiere 🍪',
    },
	// navigation in nav and footer
    'nav-foo__products': {
        en: 'Products',
        de: 'Produkte',
    },
    'nav-foo__contact': {
        en: 'Contact',
        de: 'Kontakt',
    },
	// site
    'thanku__thanks': {
		en: 'Thank you, the message has been sent!',
		de: 'Danke, die Nachricht wurde abgeschickt!',
	},
}

let toTranslate

const translateSite = lang => {
	if (lang == 'pl') {
		window.location.reload();
	} else {
		// title and meta
        document.querySelector('#title').innerHTML = langs.title[`${lang}`]
		// site
		toTranslate = document.querySelectorAll('.to-translate')
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