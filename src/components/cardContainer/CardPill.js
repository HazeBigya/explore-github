const CardPill = ({icon, value, name}) => {
    return (
        <div className="card-pill">
            <i className={icon}></i>
            <label>{value} {name}</label>
        </div>
    )
}

export default CardPill