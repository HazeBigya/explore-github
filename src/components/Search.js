import Paginate from "./SearchPannel/Paginate"
import { SelectedProvider } from "../context/SelectedContext"
import { SearchProvider } from '../context/SearchContext'
import { PageProvider } from "../context/PageContext"
import SearchBox from "./SearchPannel/SearchBox"

const Search = () => {
    return (
        <div className="container search-container">
            <PageProvider>
                <SelectedProvider>
                    <SearchProvider>
                        <SearchBox />
                    </SearchProvider>
                    <Paginate />
                </SelectedProvider>
            </PageProvider>
        </div>
    )
}

export default Search