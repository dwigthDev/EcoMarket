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

//importacion del Context
import { DataContext,DataContextProvider } from './Contexts/dataContext.jsx'
import VistaProducto from './Routes/VistaProducto.jsx'
import Carrito from './Routes/Carrito.jsx'
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
  },
  {
    path:"/Producto/:id",
    element:<> 
        <NavBar/>
          <VistaProducto/>
        </>,  
    errorElement:<></>
  },
  {
    path:"/carrito",
    element:<> 
        <NavBar/>
          <Carrito></Carrito>
        </>,
    errorElement:<></>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContextProvider>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </DataContextProvider>
  </StrictMode>,
)
