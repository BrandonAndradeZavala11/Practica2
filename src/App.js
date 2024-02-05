import React, { useState } from "react";
import './App.css';
import Contador from './components/Contador';
import Imagenes from './components/Imagenes';

function App() {
  const [colorAct, setColor] = useState('#FFFFFF');

  //Componente de fondo(Background)
  const cmbFondo = () =>{
    const nuevoFondo = colorAct === '#FFFFFF' ? '#ffcc00' : '#FFFFFF';
      setColor(nuevoFondo)
  }
  
  
  return (
    <header className="App-header" style={{
      backgroundColor: colorAct}}>
    <div className="App">
        <Contador color = "black"></Contador>
        <Imagenes></Imagenes>
        <br></br><button onClick={cmbFondo}>Cambiar fondo</button>
    </div>
</header>
  );
}




export default App;
