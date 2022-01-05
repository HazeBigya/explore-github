import Paginate from "./SearchPannel/Paginate"
import { SelectedProvider } from "../context/SelectedContext"
import { SearchProvider } from '../context/SearchContext'
import SearchBox from "./SearchPannel/SearchBox"

const Search = () => {
    return (
        <div className="container search-container">
            <SelectedProvider>
                <SearchProvider>
                        <SearchBox />
                </SearchProvider>
                <Paginate />
            </SelectedProvider>
        </div>
    )
}

export default Search