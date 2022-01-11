import Paginate from "./SearchPannel/Paginate"
import SearchBox from "./SearchPannel/SearchBox"


const Search = () => {
    return (
        <div className="container search-container">
            <SearchBox />
            <Paginate />
        </div>
    )
}

export default Search