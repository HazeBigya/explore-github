import { useContext, useEffect, useRef, useLayoutEffect } from "react"
import { PageContext } from "../context/PageContext"
import { SearchContext } from "../context/SearchContext"
import { RepoContext } from "../context/RepoContext"
import { SelectedContext } from "../context/SelectedContext"
import git from "../api/git"


const Pagination = () => {
    const [page, setPage] = useContext(PageContext)
    const [search, setSearch] = useContext(SearchContext)
    const [selected, setSelected] = useContext(SelectedContext)
    const [repos, setRepos] = useContext(RepoContext)


    const firstUpdate = useRef(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        searchRepo()
    }, [page])

    const nextPage = () => {
        let curPage = parseInt(page)
        curPage = curPage + 1
        setPage(curPage)
    }

    const prevPage = () => {
        let curPage = parseInt(page)
        if (curPage !== 1) {
            curPage = curPage - 1
            setPage(curPage)
        }
    }

    const initialState = { data: {} }

    const searchRepo = async () => {
        try {
            const response = await git.get("/repo", {
                params: {
                    q: search,
                    per_page: selected,
                    page: page
                },
            });
            const results = response.data.data

            setRepos(initialState)
            setRepos({ data: results })

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="pagination-pannel">
            <button className="btn btn-dark" onClick={prevPage}>PREV</button>
            <button className="btn btn-secondary" disabled>{page}</button>
            <button className="btn btn-dark" onClick={nextPage}>NEXT</button>
        </div>
    )
}

export default Pagination