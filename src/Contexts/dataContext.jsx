import { createContext, useState  } from 'react'

export const DataContext = createContext()
export function DataContextProvider({ children }) {

    const [productos,setProductos] = useState(0);

    const contadorProductos = productos;

    return(
    <DataContext.Provider value={contadorProductos}>
        {children}
    </DataContext.Provider>
    );

}