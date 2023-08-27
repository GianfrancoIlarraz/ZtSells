/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


const ItemCard = ({ ID, Nombre, Precio, Descripcion, img }) => {

    return (
        <div className="itemCard">

            <Link className="" to={`/detalle/${ID}`}><img src={img} alt={ID} /></Link>
            <div className="cardInfo">
                <h2>{Nombre}</h2>
                <h3>${Precio}</h3>
                <p>{Descripcion}</p>
                <Link className="" to={`/detalle/${ID}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default ItemCard