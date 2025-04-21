import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
// paginas
  import { Login }    from '../src/Routes/Login.jsx'
  import { Registro } from '../src/Routes/Registro.jsx'
import NavBar from './Componentes/NavBar.jsx'
import Tienda from './Routes/Tienda.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<> 
        <NavBar/>
          <App/>
        </>, 
    errorElement:<></>
  },
  {
    path:"/login",
    element:<Login/>, 
    errorElement:<></>
  },
  {
    path:"/registro",
    element:<Registro/>, 
    errorElement:<></>
  },
  {
    path:"/tienda",
    element:<> 
        <NavBar/>
          <Tienda/>
        </>,  
    errorElement:<></>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
