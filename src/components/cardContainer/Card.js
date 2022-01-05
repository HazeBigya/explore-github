import CardPill from "./CardPill"

const Card = ({ repoData }) => {
    return (
        <div className="card col-md-4" key={repoData.id}>
            <div className="top-pannel">
                <div className="pannel-group">
                    <label className="text-head">Repository</label>
                    <a className="sub-text" href={repoData.repoURL} target="_blank">: {repoData.repository}</a>
                </div>
                <div className="pannel-group">
                    <label className="text-head">Author</label>
                    <a className="sub-text" href={repoData.onwerURL} target="_blank">: {repoData.owner}</a>
                </div>
            </div>
            <hr />
            <div className="mid-pannel">
                <CardPill icon="far fa-star" value={repoData.stars} name="Stars" />
                <CardPill icon="far fa-eye" value={repoData.watchers} name="Watchers" />
                <CardPill icon="fas fa-code-branch" value={repoData.forks} name="Forks" />
            </div>
            <hr />
            <div className="bottom-pannel">
                <div className="pannel-group">
                    <p className="desc-text">{repoData.description}</p>
                </div>
                <div className="pannel-group">
                    <label className="text-head">Last Updated</label>
                    <label className="sub-text">: {repoData.updated_at}</label>
                </div>
            </div>
            <button className="btn btn-card"><i className="fas fa-info-circle me-2"></i> View Details</button>
        </div>
    )
}

export default Card