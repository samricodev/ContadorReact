import './App.css'
import imgLogo from './assets/freecodecamp-logo.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [numClicks, setNumclicks] = useState(0);

  const manejarClick = () => {
    console.log("Click");
    setNumclicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    console.log("Reiniciar");
    setNumclicks(0);
  }

  return (
    <div className="App">
      <div className='logo'>
        <img 
          className='img-logo'
          src={imgLogo}
          alt="logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-p">
        <Contador numClicks={numClicks}/>
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  )
}

export default App
