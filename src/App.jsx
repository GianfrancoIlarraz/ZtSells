import './styles/styles.scss'
import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {

  return (

    <CartProvider>

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:categoryId' element={<ItemListContainer />} />
          <Route path='/detalle/:itemId' element={<ItemDetailContainer />}></Route>
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<h2>404 not found</h2>} />
          
        </Routes>

      </BrowserRouter>

    </CartProvider>






  )
}

export default App