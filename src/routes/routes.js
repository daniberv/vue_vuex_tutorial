import Home from '@/pages/HomePage'
import Login from '@/pages/LoginPage'
import Settings from '@/pages/SettingsPage'
import NotFound from '@/pages/NotFoundPage'

export const routeslist = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    { path: '/404', name: '404', component: NotFound },
    { path: '*', redirect: '/404' }
]