import { useContext, useState, useEffect } from "react"
import { RepoInfoContext } from "../context/RepInfoContext"
import CardPill from "./cardContainer/CardPill"
import git from "../api/git"

const Repository = () => {
    const [loading, setLoading] = useState(true);
    const [readme, setReadme] = useState('')
    const [repo, setRepo] = useContext(RepoInfoContext)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await git.get("/repo/readMe", {
                    params: {
                        author: repo.owner,
                        repo: repo.repository
                    },
                });
                setReadme(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();

    }, [])

    return (
        <div className="container">
            <div className="card-conatiner">
                <div className="repo-card">
                    <div className="repo-head">
                        <div className="repo-title">
                            <label className="me-2">Repository:</label>
                            <label>{repo.repository}</label>
                        </div>
                        <div className="repo-author">
                            <label className="me-2">Author:</label>
                            <label>{repo.owner}</label>
                        </div>
                    </div>

                    <div className="date-pannel">
                        <label className="me-2">Last Updated</label>
                        <label>{repo.updated_at}</label>
                    </div>

                    <div className="pill-pannel">
                        <CardPill icon="far fa-star" value={repo.stars} name="Stars" />
                        <CardPill icon="far fa-eye" value={repo.watchers} name="Watchers" />
                        <CardPill icon="fas fa-code-branch" value={repo.forks} name="Forks" />
                        <CardPill icon="fas fa-exclamation-circle" value={repo.forks} name="Open Issues" />
                    </div>

                    <div className="read-pannel">
                        <p dangerouslySetInnerHTML={{__html: readme}}>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repository