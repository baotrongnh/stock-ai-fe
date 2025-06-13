import React from 'react'
import { Route } from 'react-router'
import type { RouteItem } from '../types/route.type'

export const renderRoutes = (routes: RouteItem[]): React.ReactNode => {
     return (
          <>
               {routes.map((route, index) => {
                    const Page = route.element
                    const Layout = route.layout ?? React.Fragment
                    return (
                         <Route key={index} path={route.path} element={<Layout><Page /></Layout>}>
                              {route.children ? renderRoutes(route.children) : null}
                         </Route>
                    )
               })}
          </>
     )
}