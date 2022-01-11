import { useState, createContext } from "react"

export const RepoContext = createContext()

export const RepoProvider = (props) => {
    const [repos, setRepos] = useState({data: {}})

    return (
        <RepoContext.Provider value={[repos, setRepos]}>
            {props.children}
        </RepoContext.Provider>
    )
}