function switchLanguage() {
    const lang = document.querySelector('html').getAttribute('lang');
    const newLang = lang === 'en' ? 'es' : 'en';
    document.querySelector('html').setAttribute('lang', newLang);
    // set lang query param without reloading
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url);
}

// get current language from query param
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang');
if (lang) {
    document.querySelector('html').setAttribute('lang', lang);
}