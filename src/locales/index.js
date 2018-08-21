import Vue from 'vue'

import rus from './rus'
import eng from './eng'
import tat from './tat'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
  rus,
  tat,
  eng
}

export default locale => {
  return new VueI18n({
    locale,
    messages,
    missing (locale, key) {
      // TODO: как-то реагировать на отсутствие локали
      console.error('Locale missing: ', locale, key)
    }
  })
}
