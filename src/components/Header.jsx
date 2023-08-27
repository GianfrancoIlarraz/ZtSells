import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import Buscador from './Buscador'

const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <Link className="header__logo" to='/'>ZtSells</Link>
                <nav className="header__nav">
                    <Link className="header__link" to='/'>Inicio</Link>
                    <Link className="header__link" to='/productos/hardware'>Hardware</Link>
                    <Link className="header__link" to='/productos/perifericos'>Periféricos</Link>
                    <Link className="header__link" to='/productos/otros'>Otros</Link>
                    <Link className="header__link" to='/nosotros'>Nosotros</Link>
                </nav>
                <CartWidget />
            </div>
            <Buscador/>
        </header>
    )
}

export default Header