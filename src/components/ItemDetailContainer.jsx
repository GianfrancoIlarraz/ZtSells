import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import { pedirDatos } from "../helpers/pedirDatos"
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        //Pedir Datos con FIREBASE
        const itemRef = doc(db, "productos", itemId)
        getDoc(itemRef)
            .then((doc) => {
                setItem({
                    ...doc.data(),
                    ID: doc.id
                })
            })


        // Pedir Datos con MOCK Local
        // pedirDatos()
        //     .then((res) => {
        //         setItem(res.find((prod) => prod.ID === Number(itemId)))
        //     })
        
             .catch((err) => console.log(err))
             .finally(() => setLoading(false))

    }, [itemId])

    return (
        <div className="itemDetail">
            {
                loading ?
                    <h2>Cargando...</h2>
                    : <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer