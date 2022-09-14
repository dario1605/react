
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CardDisco from './componentes/CardDisco';
import Cart from './componentes/Cart';
import Cupones from './componentes/Cupones';
import Footer from './componentes/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';


function App() {
  return (
    <div className='container-fluid fondoPurple'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='cart' element={<Cart />} />
          <Route path='detalle/:detalleId' element={<ItemDetailContainer/>} />
        </Routes>
        <CardDisco/>
        <Cupones />
        <Footer />
      </BrowserRouter>
    </div> 
  )
}

export default App;

