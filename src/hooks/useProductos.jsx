import { useEffect, useState } from "react"
// import { pedirDatos } from "../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

const useProductos = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState([true])


    

    const { categoryId } = useParams()

    useEffect(() => {
        //Seteo usando Firebase
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId 
                        ? query(productosRef, where("Categoria", "==", categoryId))
                        : productosRef

        getDocs(q)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({...doc.data(), ID: doc.id}))
                setProductos(items)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))



        // Seteo de los producots usando MOCK DATA
        // pedirDatos()
        //     .then((res) => {
        //         setLoading(false);
        //         if (!categoryId) {
        //             setProductos(res)
        //         } else {
        //             setProductos(res.filter(prod => prod.Categoria === categoryId))
        //         }
        //     })
        //     .catch((err) => { console.log(err) })
    }, [categoryId])

    

    return { productos, loading }
}

export default useProductos