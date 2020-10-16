import Home from '@/pages/HomePage'
import Settings from '@/pages/SettingsPage'
import NotFound from '@/pages/NotFoundPage'

export const routeslist = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    { path: '/404', name: '404', component: NotFound },
    { path: '*', redirect: '/404' }
]