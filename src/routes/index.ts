import { Home, Login, Register } from '../pages'
/*
Add new route:
Ex: 
import {Login} from '../pages'
{ path: '/login', element: Login }
*/

const publicRoutes = [
     { path: '/', element: Home },
     { path: '/login', element: Login },
     { path: '/register', element: Register }
]

export { publicRoutes }