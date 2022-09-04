
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

/* En la linea 17 , yo podria crear cards en , greting="ACA IRIA MI CARD" para llamarla luego en  itemlistcontainer?
    O es mejor creando un jsx con las cards ? como el ejemplo CardDisco . Hice los 2 asi como para demostrar en el desafio 
    pero me queda esa duda de cual utilizar porque en definitiva mi CardDisco , ya es mi body(itemlistcontainer).
    Gracias por su tiempo :D */