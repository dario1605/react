
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './componentes/Cart';
import Footer from './componentes/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import React from 'react';
import CartProvider from './context/CartContext';
import Checkout from './componentes/Checkout';


function App() {
  return (
    <div className='container-fluid fondoPurple'>
      <BrowserRouter>
        <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
              <Route path='cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='detalle/:detalleId' element={<ItemDetailContainer/>} />
            </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div> 
  )
}

export default App;

