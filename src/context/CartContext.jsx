import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

// eslint-disable-next-line react/prop-types
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }

    const eliminarDelCarrito = (id) => {
        setCart(cart.filter((prod) => prod.ID !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.ID === id)
    }

    const totalCompra = () => {
        return cart.reduce((acc, prod) => acc = acc + prod.Precio * prod.cantidad, 0)
    }

    const totalCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCompra,
            vaciarCarrito,
            eliminarDelCarrito,
            totalCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}