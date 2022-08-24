
import './App.css';
import Descuentos from './assets/Descuentos';
import Destacado from './assets/Destacado';
import Footer from './assets/Footer';
import Header from './assets/Header';



function App() {
  return (
    <div className='container-fluid fondoPurple'>
      <Header />
      <hr />
      <Destacado />
      <Descuentos />
      <Footer />
    </div>
  );
}

export default App;
