import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import VeeValidate from 'vee-validate'
import { mapState } from 'vuex'

import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$eventHub = new Vue(); // Global event bus

Vue.use(Buefy)
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created () {
    if (!this.loggedIn) {
      // this.logout()
      this.init()
    } else {
      this.init()
    }
  },

  methods: {
    logout () {
      this.$router.push('/auth')
    },

    init () {
     // тут что то делаем после проверки авторизации
     console.log('Vue app init')
    }
  },

  computed: {
    ...mapState('auth', ['loggedIn'])
  },

  watch: {
    loggedIn (status) {
      if (!status) {
        // this.logout()
        this.init()
      } else {
        this.init()
      }
    }
  },

  render: h => h(App)
})
