import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    // valor del input
    const [buscador, setBuscador] = useState('');
    // valor de la paginacion
    const [paginacion, setPaginacion] = useState('all');

    return (
        <GlobalContext.Provider value={{
            buscador,
            setBuscador,
            paginacion,
            setPaginacion
        }}>
            {  children }
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;