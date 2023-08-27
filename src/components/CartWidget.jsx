import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className='cart__container'>
            <FaShoppingCart size={50}/>
            {totalCantidad() !== 0 && <span className='cart__counter'>{totalCantidad()}</span>} 
        </Link>
    )
}

export default CartWidget