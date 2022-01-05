import icon from "../assets/git.png"
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <div className="container">
                <Link className="home" to="/">
                    <img src={icon} className="icon" alt={"logo"} />
                    <label>Git Explore</label>
                </Link>
            </div>
        </div>
    )
}

export default Nav