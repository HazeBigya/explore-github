import { useState, createContext } from "react"

export const RepoInfoContext = createContext()

export const RepoInfoProvider = (props) => {
    const [repo, setRepo] = useState()

    return (
        <RepoInfoContext.Provider value={[repo, setRepo]}>
            {props.children}
        </RepoInfoContext.Provider>
    )
}