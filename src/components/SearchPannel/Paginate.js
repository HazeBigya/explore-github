import { useContext } from "react"
import { SelectedContext } from '../../context/SelectedContext'

const Paginate = () => {
    const [selected, setSelected] = useContext(SelectedContext)

    const changePagination = async (e) => {
        setSelected({value: e.target.value})
    }

    return (
        <div className="form-group ms-3">
            <select className="form-select" value={selected.value} onChange={changePagination}>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
        </div>
    )
}

export default Paginate