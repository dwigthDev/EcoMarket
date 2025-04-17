/*Mis importaciones*/
import './App.css'
import EcoMarketLogo from './assets/EcoMarket-logo.png'
import { Login } from './Componentes/Login'
function App() {
  return (
    <>
    <div className='card'>
      <div>
            <img src={EcoMarketLogo} className="logo" alt="Vite logo" />
        </div>
        <Login></Login>
        <button> Iniciar Sesion </button>
        <div className="d-flex align-items-center my-2">
            <hr className="flex-grow-1"/>
              <a href='#' className='ms-4 me-4'>Crear una cuenta</a>
            <hr className="flex-grow-1"/>
        </div>
            
    </div>
    </>
  )
}

export default App





/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/
