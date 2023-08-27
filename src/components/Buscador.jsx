import { useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

const Buscador = () => {

    const [, setSearchParams] = useSearchParams()

    const ref = useRef()


    const handleSubmit = (e) => {
        e.preventDefault()
        const value = ref.current.value

        if (value === '') {
            setSearchParams({})
            return
        }
        setSearchParams({
            search: value
        })
    }

    const handleReset = () => {
        setSearchParams({})
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={ref}
                className='buscador'
                type='text'
            />
            <button type='submit' className='buscar'>Buscar</button>
            <button className='clear' type='reset' onClick={handleReset}>X</button>
        </form>
    )
}

export default Buscador