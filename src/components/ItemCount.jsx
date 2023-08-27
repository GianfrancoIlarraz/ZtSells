
// eslint-disable-next-line react/prop-types
const ItemCount = ({ max, cantidad, setCantidad, handleAgregar }) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div>
            <button onClick={handleRestar} className={cantidad === 1 ? 'buttonRed' : 'button'} disabled={cantidad===1}>-</button>
            <span className="addCount">{cantidad}</span>
            <button onClick={handleSumar} className={cantidad === max ? 'buttonRed' : 'button'} disabled={cantidad===max}>+</button>
            <br />
            <button onClick={handleAgregar} className="button">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount