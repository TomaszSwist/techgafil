const userLangFull = navigator.language || navigator.userLanguage
const userLang = userLangFull.slice(0, 2)
const choosenLanguage = localStorage.getItem('choosenLanguage')

const langs = {
	// title and meta
	title: {
		en: 'TECHGAFIL - Contact manufacturer of PB and NNPB cooling nozzles',
		de: 'TECHGAFIL - Kontakt mit dem Hersteller von PB- und NNPB-Kühldüsen',
	},
	meta_description: {
		en: 'Would you like to contact us? Are you looking for our adees? Write to us. TECHGAFIL - contact information, address, e-mail, telephone and contact form.',
		de: 'Möchten Sie mit uns in Kontakt treten? Suchen Sie nach unseren Adepten? Schreiben Sie uns. TECHGAFIL-Kontaktdaten, Adresse, E-Mail, Telefon und Kontaktformular.',
	},
	// cookies
	cookies: {
		en: 'Our website uses cookies!',
		de: 'Unsere Website verwendet Cookies!',
	},
	cookies__btn: {
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
	// placeholders in corntact form
	'contact__p-name': {
		en: 'Your name...',
		de: 'Ihr Name...',
	},
	'contact__p-mail': {
		en: 'Your e-mail address...',
		de: 'Ihre E-Mail Adresse...',
	},
	'contact__p-phone': {
		en: 'Your phone number...',
		de: 'Ihre Telefonnummer ...',
	},
	'contact__p-message': {
		en: 'Your message...',
		de: 'Ihre Nachricht...',
	},
	// site
	'contact__contact': {
		en: 'Contact',
		de: 'Kontakt',
	},
	'contact__info': {
		en: 'Information',
		de: 'Informationen',
	},
	'contact__info-text': {
		en: 'We specialize in the production of NNPB and PB cooling nozzles - essential in the production of glass packaging.',
		de: 'Wir sind auf die Herstellung von NNPB- und PB-Kühldüsen spezialisiert, die für die Herstellung von Glasverpackungen unerlässlich sind.',
	},
	contact__address: {
		en: 'Address: <br>Głuchów 167, 37-100 Łańcut<br>Poland',
		de: 'Adresse: <br>Głuchów 167, 37-100 Łańcut<br>Polen',
	},
	contact__phone: {
		en: 'Phone: <br><a href="tel:+48693341017">+48 693 341 017</a>',
		de: 'Telefon: <br><a href="tel:+48693341017">+48 693 341 017</a>',
	},
	contact__form: {
		en: 'Contact<br>form',
		de: 'Kontakt<br>Formular',
	},
	'contact__form-name': {
		en: 'Full name',
		de: 'Der Name',
	},
	'contact__form-phone': {
		en: 'Phone',
		de: 'Telefon',
	},
	'contact__form-message': {
		en: 'Message',
		de: 'Nachricht',
	},
	'contact__form-btn': {
		en: 'Send',
		de: 'Senden',
	},
}

let toTranslate

const translateSite = lang => {
	if (lang == 'pl') {
		window.location.reload()
	} else {
		// title and meta
		document.querySelector('#title').innerHTML = langs.title[`${lang}`]
		document.querySelector('#meta_description').content = langs.meta_description[`${lang}`]
		// placeholders in corntact form
		document.querySelector('#contact__p-name').placeholder = langs['contact__p-name'][`${lang}`]
		document.querySelector('#contact__p-mail').placeholder = langs['contact__p-mail'][`${lang}`]
		document.querySelector('#contact__p-phone').placeholder = langs['contact__p-phone'][`${lang}`]
		document.querySelector('#contact__p-message').placeholder = langs['contact__p-message'][`${lang}`]
		// site and cookies
		toTranslate = document.querySelectorAll('.to-translate')
		toTranslate.forEach(el => {
			const id = el.getAttribute('data-translate')
			const newContent = langs[`${id}`][`${lang}`]
			el.innerHTML = newContent
		})
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
