import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import intranetStorage from '@/services/storage'
import { moduleFactory, modules } from '@/modules'

Vue.use(Router)

let routes = [{
  path: '/',
  name: 'Main',
  component: () => import('@/components/pages/main')
}, {
  path: '*',
  name: 'NotFound',
  component: () => import('@/components/pages/404')
}]

for (let module of modules) {
  routes.push(moduleFactory({ ...module, store }))
}

const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    // Если мы хотим на какую то страницу, но не авторизованы
    // направимся на страницу авторизации
    if(!intranetStorage.get('sessToken') && to.path != '/auth') {
      // раскомментить после реализации авторизации
      // next({ path: '/auth' })

      // а это удалить
      next()
    } else {
      next()
    }
})

router.afterEach((to, from) => {
    // Сбросим после перехода назад инфу для компонентов
    to.meta.back = false
})

export default router
