import { createContext, useState } from "react";

export const InputContext = createContext();

const InputContextProvider = ({ children }) => {
    // valor del input
    const [buscador, setBuscador] = useState('');

    return (
        <InputContext.Provider value={{
            buscador,
            setBuscador
        }}>
            {  children }
        </InputContext.Provider>
    );
}

export default InputContextProvider;