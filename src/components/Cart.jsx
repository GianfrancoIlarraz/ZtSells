import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { FaTrashAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div>
                <h2>Tu carrito está vacío</h2>
                <hr />
                <Link to='/'>Ir al a tienda</Link>
            </div>
        )
    }

    return (
        <div className='cartContainer'>
            <h2>Tu compra</h2>
            <hr />

            <div className='cartItems'>
                {
                    cart.map((prod => (
                        <div key={prod.ID}>
                            <h4>{prod.Nombre}</h4>
                            <img src={prod.img} alt={prod.Nombre} />
                            <p>Precio: ${prod.Precio}</p>
                            <p>Cantidad: {prod.cantidad}</p>
                            <button className='removeButton' onClick={()=> eliminarDelCarrito(prod.ID)}><FaTrashAlt size={20}/></button>
                        </div>
                    )))
                }
            </div>
            <div>
                <h2>Total: ${totalCompra()}</h2>
                <hr />
                <button className='emptyCart' onClick={vaciarCarrito}>Vaciar Carrito</button>
                <Link to='/checkout' className='finishPurchase'>Terminar mi compra</Link>
            </div>

        </div>
    )
}

export default Cart