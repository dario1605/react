
import './App.css';
import CardDisco from './componentes/CardDisco';
import Cupones from './componentes/Cupones';
import Footer from './componentes/Footer';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';


function App() {

  return (
    <div className='container-fluid fondoPurple'>
      <Navbar />
      <hr />
      <ItemListContainer texto="Esteban" />
      <CardDisco />
      <Cupones />
      <Footer />
    </div> 
  )
}

export default App;

