import axios from 'axios'
import store from '@/store'
import { assign } from 'lodash'
import intranetStorage from '@/services/storage'
import config from '@/config'

axios.defaults.baseURL = config['baseURL']
axios.defaults.headers.post['Accept'] = '*/*'

let instance = axios.create({})

instance.interceptors.request.use(function (request) {
    const sessToken = intranetStorage.get('sessToken')

    if ( sessToken ) {
        // Примешаем данные для запроса к api
        request.url += `?token=${sessToken}`
    }

    return request
}, function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
    return response
}, function (error) {
    if (!error.response) {
        // network error
        alert("Проверьте подключение к сети")
    } else {
        if(error.response.status == '401') {
            return store.dispatch('auth/logout').then(() => {
                return Promise.reject(error)
            }, () => {
                return Promise.reject(error)
            })
        } else if(error.response.status != '400') {
            alert("Сервис временно недоступен")
        }
    }

    return Promise.reject(error)
})

export default instance
