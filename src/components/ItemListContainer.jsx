import ItemList from './ItemList'
import useProductos from "../hooks/useProductos"
import { useSearchParams } from 'react-router-dom'





const ItemListContainer = () => {

    const [searchParams] = useSearchParams()

    const search = searchParams.get("search")

    const { productos, loading } = useProductos()


    const listado = search
                        ? productos.filter(prod => prod.Nombre.toUpperCase().includes(search.toUpperCase()))
                        : productos

    return (
        <div className="list__container">
            {
                loading ? <h2>Cargando...</h2> : <ItemList items={listado} />
            }
        </div>
    )
}

export default ItemListContainer