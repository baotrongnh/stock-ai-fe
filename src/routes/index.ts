import { AdminLayout, DefaultLayout } from '../layouts'
import { Home } from '../pages'
import { Dashboard } from '../pages/admin'
import { renderRoutes } from './renderRoute'

const publicRoutes = [
     {
          path: '/home', element: Home, layout: DefaultLayout,
     }
]

const adminRoutes = [
     {
          path: '/admin',
          element: AdminLayout,
          layout: null,
          children: [
               { path: 'dashboard', element: Dashboard, layout: null }
          ]
     }
]

export { adminRoutes, publicRoutes, renderRoutes }
