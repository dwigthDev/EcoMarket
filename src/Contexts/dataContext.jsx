import { createContext, useState  } from 'react'

export const DataContext = createContext()
export function DataContextProvider({ children }) {

    const [contextData,setContextData] = useState(0);

    const valor = contextData;

    return(
    <DataContext.Provider value={valor}>
        {children}
    </DataContext.Provider>
    );

}