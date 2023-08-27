import { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Navigate } from 'react-router-dom'
import { collection, addDoc, getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/config'

const Checkout = () => {

    const { cart, totalCompra } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Validacion
        if (values.nombre.length === 0) {
            alert('El nombre es obligatorio')
            return
        }
        if (values.direccion.length === 0) {
            alert('La direccion es obligatorio')
            return
        }
        if (values.email.length === 0) {
            alert('El email es obligatorio')
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date(),
        }

        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) => alert(`Orden completada, tu código de orden es ${doc.id}`))

        cart.forEach((item) => {
            const docRef = doc(db, "productos", item.id)

            getDoc(docRef)
                .then((doc) => {
                    const stock = doc.data().stock

                    updateDoc(docRef, {
                        stock: stock - item.cantidad
                    })
                })
        })
    }


    if (cart.length === 0) {
        return <Navigate to="/" />
    }


    return (
        <div>
            <h2>Checkout</h2>
            <hr />
            <div className='checkoutContainer'>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        value={values.nombre}
                        placeholder='Nombre'
                        onChange={handleInputChange}
                        className='inputCheckout'
                        name='nombre'
                    />
                    <input type="text"
                        value={values.direccion}
                        placeholder='Direccion'
                        onChange={handleInputChange}
                        className='inputCheckout'
                        name='direccion'
                    />
                    <input type="text"
                        value={values.email}
                        placeholder='Email'
                        onChange={handleInputChange}
                        className='inputCheckout'
                        name='email'
                    />
                    <button type='submit'>Enviar</button>
                </form>
            </div>

        </div>
    )
}

export default Checkout