import {createI18n} from 'vue-i18n'
import translations from '../../../traducciones/translations.json'

export const i18n = createI18n({
    locale: 'en', // idioma predeterminado
    fallbackLocale: 'en',
    messages: translations
})

