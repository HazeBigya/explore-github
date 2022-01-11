import { useContext } from "react"
import { RepoContext } from "../../context/RepoContext"
import Card from "./Card"
import NoData from "./NoData"
import Pagination from "../Pagination"

const Container = () => {
    const [repos, setRepos] = useContext(RepoContext)
    let repose = repos.data
    console.log(repose)

    return (
        <div className="card-conatiner row">
            <Pagination />
            {
                (Object.keys(repose).length > 0) ? repose.map(repo => (<Card repoData={repo} key={repo.id} />)) : <NoData />
            }
        </div>
    )
}

export default Container