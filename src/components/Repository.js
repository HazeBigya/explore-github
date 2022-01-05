import { useContext } from "react"
import { RepoInfoContext } from "../context/RepInfoContext"
import CardPill from "./cardContainer/CardPill"

const Repository = () => {
    const [repo, setRepo] = useContext(RepoInfoContext)
    return (
        <div className="container">
            <div className="card-conatiner">
                <div className="repo-card">
                    {repo.repository}

                    {repo.owner}

                    <CardPill icon="far fa-star" value={repo.stars} name="Stars" />
                    <CardPill icon="far fa-eye" value={repo.watchers} name="Watchers" />
                    <CardPill icon="fas fa-code-branch" value={repo.forks} name="Forks" />
                    <CardPill icon="fas fa-exclamation-circle" value={repo.forks} name="Open Issues" />
                    {repo.updated_at}
                    
                    README.md.....
                </div>
            </div>
        </div>
    )
}

export default Repository