const modules = [
  {
    name: 'profile',
    path: '/profile',
    layout: 'base/Layout'
  },
  {
    name: 'auth',
    path: '/auth',
    layout: 'base/Layout'
  }
]

const moduleFactory = ({ name, store, path, layout }) => {
  const module = require(`@/modules/${name}`)

  if (void 0 !== module.store) {
    store.registerModule(name, module.store)
  }

  return {
    path: path,
    children: [...module.routes],
    component: () => import(`@/components/layouts/${layout}`)
  }
}

export { modules, moduleFactory }
