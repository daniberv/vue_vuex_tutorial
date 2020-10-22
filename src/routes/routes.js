import Home from '@/pages/HomePage'
import Login from '@/pages/LoginPage'
import Webapp from '@/pages/WebappPage'
import Settings from '@/pages/SettingsPage'
import NotFound from '@/pages/NotFoundPage'

import guest from '@/routes/middleware/guest'
import auth from '@/routes/middleware/auth'

export const routeslist = [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        middleware: [
          guest
        ]
      }
    },
    {
      path: '/webapp',
      name: 'webapp',
      component: Webapp,
      meta: {
        middleware: [
          auth
        ]
      },
      children: [
        {
          path: '/webapp/home',
          name: 'webapp.home',
          component: Home,
          meta: {
            middleware: [
              auth
            ]
          }
        },
        {
          path: '/webapp/settings',
          name: 'webapp.settings',
          component: Settings,
          meta: {
            middleware: [
              auth
            ]
          }
        },
      ] 
    },
    { path: '/404', name: '404', component: NotFound },
    { path: '*', redirect: '/404' }
]