import { createContext, useContext, useState } from "react";

const DarkContext = createContext()

export default function DarkProvider({ children }) {
    let [dark, setDark] = useState(true)

    return <DarkContext.Provider value={[dark, setDark]} >
        {children}
    </DarkContext.Provider>
}

export function useDark() {
    return useContext(DarkContext)
}