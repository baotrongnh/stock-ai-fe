import { Routes } from 'react-router'
import './App.css'
import { adminRoutes, publicRoutes, renderRoutes } from './routes'

function App() {

  return (
    <>
      <Routes>
        {renderRoutes(publicRoutes)}
        {renderRoutes(adminRoutes)}
      </Routes>
    </>
  )
}

export default App
