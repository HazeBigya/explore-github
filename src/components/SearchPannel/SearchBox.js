import { useState, useContext } from "react"
import { SearchContext } from "../../context/SearchContext"
import { SelectedContext } from "../../context/SelectedContext"
import { RepoContext } from "../../context/RepoContext"
import git from "../../api/git"

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('')
    const [search, setSearch] = useContext(SearchContext)
    const [selected, setSelected] = useContext(SelectedContext)
    const [repos, setRepos] = useContext(RepoContext)

    const updateSearchValue = (e) => {
        setSearchValue(e.target.value)
    }

    const validateSearch = (e) => {
        e.preventDefault()
        if (searchValue === "") {
            alert('Please Enter a Something To Search')
            return false
        }

        searchRepo()
    }

    const searchRepo = async () => {
        setSearch(searchValue)
        try {
            const response = await git.get("/repo", {
                params: {
                    q: searchValue,
                    per_page: selected
                },
            });
            const results = response.data.data
            const id=''
            setRepos(repos.filter((repos) => (repos.id !== id)))
            setRepos([...repos, results])
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={validateSearch}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search A Repo" value={searchValue} onChange={updateSearchValue} />
                <div className="input-group-append">
                    <button className="input-group-text" onClick={validateSearch}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </form>)
}

export default SearchBox