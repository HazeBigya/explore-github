import { useState, createContext } from "react"

export const SelectedContext = createContext()

export const SelectedProvider = (props) => {
    const [selected, setSelected] = useState({value: '20'})

    return (
        <SelectedContext.Provider value={[selected, setSelected]}>
            {props.children}
        </SelectedContext.Provider>
    )
}