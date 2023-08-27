import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ItemDetail = ({ ID, Nombre, Precio, Categoria, Descripcion, img, stock }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            ID,
            Nombre,
            Precio,
            Categoria,
            Descripcion,
            img,
            stock,
            cantidad
        }

        agregarAlCarrito(item)
    }

    const handleVolver = () => {
        navigate(-1)
    }



    return (
        <div>
            <h2>{Nombre}</h2>
            <img src={img} alt={Nombre} />
            <p>{Descripcion}</p>

            <h4>Precio: {Precio}</h4>
            <br />
            <small>Categoría: {Categoria}</small>
            {stock < 10 && <div className='fewLeft'>Quedan solo {stock} unidades!</div>}
            <div>
                {
                    isInCart(ID)
                        ? <Link className='endBuy' to="/cart">Terminar mi compra</Link>
                        : <ItemCount
                            max={stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            handleAgregar={handleAgregar}
                        />
                }
            </div>



            <hr />
            <button onClick={handleVolver} className='button'>Volver</button>
        </div>
    )
}

export default ItemDetail