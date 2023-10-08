import { createContext } from "react";

const StellarContext = createContext();

const StellarProvider = ({children}) => {

    const clasesParaAnimacion = "cursor-pointer transition duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95 hover:scale-105"

    return (
        <StellarContext.Provider
            value={
                {
                    clasesParaAnimacion
                }
            }
        >
            {children}
        </StellarContext.Provider>
    )
}

export {
    StellarProvider
}
export default StellarContext;