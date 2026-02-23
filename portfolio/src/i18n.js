import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import pt from './locales/pt.json'

const userLang = navigator.language || navigator.userLanguage
const defaultLocale = userLang.startsWith('pt') ? 'pt' : 'en'

const i18n = createI18n({
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages: {
        en,
        pt
    },
    legacy: false, // Setting legacy to false enables Composition API support
    globalInjection: true // Inject $t globally
})

export default i18n
