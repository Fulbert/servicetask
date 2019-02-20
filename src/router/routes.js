import base from 'layouts/Base.vue'

const routes = [
  {
    path: '/',
    component: base,
    children: [
      {
        path: '',
        name: 'Tasks list',
        component: () => import('pages/Tasks.vue'),
        meta: {
          title: 'Tasks List',
          description: 'List of things to do'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/Login.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('pages/Login.vue'),
        meta: {
          title: 'Login'
        }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes