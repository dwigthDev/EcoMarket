import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
// paginas
  import { Login }    from '../src/Routes/Login.jsx'
  import { Registro } from '../src/Routes/Registro.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>, 
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
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
