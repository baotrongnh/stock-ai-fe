import { AdminLayout, DefaultLayout } from '../layouts'
import { Home } from '../pages'
import { Dashboard } from '../pages/admin'
import { renderRoutes } from './renderRoute'
import { Login, Register } from '../pages'
/*
Add new route:
Ex: 
import {Login} from '../pages'
{ path: '/login', element: Login }
*/

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
     },
     { path: '/', element: Home },
     { path: '/login', element: Login },
     { path: '/register', element: Register }
]

export { adminRoutes, publicRoutes, renderRoutes }
