import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Routes } from 'react-router'
import './App.css'
import { adminRoutes, publicRoutes, renderRoutes } from './routes'

function App() {

  return (
    <>
      <MantineProvider>
        <Routes>

          {renderRoutes(publicRoutes)}
          {renderRoutes(adminRoutes)}

        </Routes>
      </MantineProvider>
    </>
  )
}

export default App
