
import './App.css';

function App() {
  const imagen = "led-zeppelin.jpg";
  const titulo = "Mi primer app con react";
  const subtitulo = "Esta es mi banda preferida"
  const descripcion = "Se llama LED ZEPPELIN ";

  return (
    <div className='card mb3 '>
  <h3 className="card-header">{titulo}</h3>
  <div className="card-body">
    <h5 className="card-title">{subtitulo}</h5>
  </div>
  <img src={imagen} className="d-block user-select-none" width="40%" height="50%" />
  <div className="card-body">
    <h5 className="card-title">{descripcion}</h5>
  </div>
    </div>
  );
}

export default App;
