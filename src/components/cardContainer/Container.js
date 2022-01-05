import { useContext } from "react"
import { RepoContext } from "../../context/RepoContext"
import Card from "./Card"
import NoData from "./NoData"

const Container = () => {
    const [repos, setRepos] = useContext(RepoContext)
    let repose = repos[1]

    return (
        <div className="card-conatiner row">
            {
                (repos.length > 1) ? repose.map(repo => (<Card repoData={repo} key={repo.id} />)) : <NoData />
            }
        </div>
    )
}

export default Container