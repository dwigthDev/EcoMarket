import { createContext,useState } from 'react'
export const ProductosCarrito = createContext();

export function DataContextProvider({ children }) {
    const [productos,setProductos] = useState([1,2,])
    return(
        <DataContextProvider value={productos}>
            {children}
        </DataContextProvider>
    );
}



