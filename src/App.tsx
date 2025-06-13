import './App.css'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { publicRoutes } from './routes'
import { Route, Routes } from 'react-router'
import type { RouteItem } from './types/route.type'

function App() {

  return (
    <>
      <MantineProvider>
        <Routes>

          {publicRoutes.map((route: RouteItem, index: number) => {
            const Page = route.element
            return (
              <Route key={index} path={route.path} element={<Page />} />
            )
          })}

        </Routes>
      </MantineProvider>
    </>
  )
}

export default App
