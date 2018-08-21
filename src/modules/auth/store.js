import http from '@/services/http'
import intranetStorage from '@/services/storage'
import { initState } from '@/helpers'
import config from '@/config'

/**
 * Исходное состояние хранилища
 * @type {Object}
 */
const initial = {
  user: intranetStorage.get('user'),
  sessToken: intranetStorage.get('sessToken'),
  loggedIn: !!intranetStorage.get('sessToken')
}

const state = initState({ initial })

const getters = {
  /**
   * Возвращает контекст авторизованного пользователя
   * @param  {Object} state
   * @param  {Object} user
   * @return {Object}
   */
  user (state) {
    let user = state.user || {}

    return user
  },

  isAuth (state) {
    return state.loggedIn
  }
}

const mutations = {
  login (state, { sessToken }) {
    state.loggedIn = true
    state.sessToken = sessToken
  },

  logout (state) {
    state.loggedIn = false
    state.sessToken = null
    state.user = {}
  },

  setUser (state, { user }) {
    state.user = user
  }
}

const actions = {
  /**
   * Авторизует пользователя
   * @param  {Object} payload
   * @param  {string} payload.login
   * @param  {string} payload.password
   * @return {Promise}
   */
  login (ctx, { login, password }) {
    return new Promise((resolve, reject) => {
      return http.get('', {
          params: {
              username: login,
              password: password
          }
      })
        .then(({ data }) => {
            const sessToken = data.access_token
            intranetStorage.set('sessToken', sessToken)

            ctx.commit('login', { sessToken })

            return resolve({ sessToken })
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  fetchUser (ctx) {
    return new Promise((resolve, reject) => {
        return http.get('')
          .then(({ data }) => {
              const user = data

              ctx.commit('setUser', { user })

              return resolve()
          })
          .catch((error) => {
            reject(error)
          })
    })
  },

  /**
   * Логаут пользователя
   * @param  {Object} ctx
   * @return {Promise}
   */
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
        return http.get('')
          .then(() => {
              intranetStorage.clear()

              commit('logout')

              return resolve()
          })
          .catch((error) => {
            intranetStorage.clear()

            commit('logout')

            reject(error)
          })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
