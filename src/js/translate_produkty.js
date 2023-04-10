const userLangFull = navigator.language || navigator.userLanguage
const userLang = userLangFull.slice(0, 2)
const choosenLanguage = localStorage.getItem('choosenLanguage')

const langs = {
	// title and meta
	title: {
		en: 'TECHGAFIL - Cooling nozzles PB and NNPB',
		de: 'TECHGAFIL - TECHGAFIL - Kühldüsen PB und NNPB',
	},
    'meta_description': {
		en: 'Want to see the PB and NNPB cooling nozzles manufactured by TECHGAFIL? Check out our products.',
		de: 'Möchten Sie die von TECHGAFIL hergestellten PB- und NNPB-Kühldüsen sehen? Sehen Sie sich unsere Produkte an.',
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
    'products__coolers-nnpb--h1': {
		en: 'Cooling nozzles<br><span>NNPB</span>',
		de: 'Kühldüsen<br><span>NNPB</span>',
	},
    'products__coolers-nnpb--p': {
		en: 'Check out our NNPB (Narrow-Neck Press and Blow) cooling nozzles. We specialize in the production of NNPB nozzles necessary for the production of glass packaging in glass factories.',
		de: 'Sehen Sie sich unsere NNPB-Kühldüsen (Narrow-Neck Press and Blow) an. Wir sind auf die Herstellung von NNPB-Düsen spezialisiert, die für die Produktion von Glasverpackungen in Glashütten erforderlich sind.',
	},
    'products__coolers-pb--h1': {
		en: 'Cooling nozzles<br><span>PB</span>',
		de: 'Kühldüsen<br><span>PB</span>',
	},
    'products__coolers-pb--p': {
		en: 'Our PB (Press and Blow) Cooling Nozzles. We manufacture turned nozzles for the PB method which is used by glass factories to produce glass packaging.',
		de: 'Unsere PB-Kühldüsen (Press and Blow). Wir fertigen gedrehte Düsen für das PB-Verfahren, das von Glashütten zur Herstellung von Glasverpackungen verwendet wird.',
	},
    'products__coolers-nnpb--img': {
		en: 'NNPB cooling nozzles - TECHGAFIL',
		de: 'NNPB Kühldüsen - TECHGAFIL',
	},
    'products__coolers-nnpb--img2': {
		en: 'PB cooling nozzles - TECHGAFIL',
		de: 'PB Kühldüsen - TECHGAFIL',
	},
    'products__coolers-pb--img': {
		en: 'PB cooling nozzles - TECHGAFIL',
		de: 'PB Kühldüsen - TECHGAFIL',
	},
    'products__coolers-pb--img2': {
		en: 'NNPB cooling nozzles - TECHGAFIL',
		de: 'NNPB Kühldüsen - TECHGAFIL',
	},
}

let toTranslate

const translateSite = lang => {
	if (lang == 'pl') {
		window.location.reload();
	} else {
		// title and meta
        document.querySelector('#title').innerHTML = langs.title[`${lang}`]
        document.querySelector('#meta_description').content = langs.meta_description[`${lang}`]
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