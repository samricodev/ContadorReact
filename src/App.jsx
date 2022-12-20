import React from 'react';
import './App.css'
import imgLogo from './assets/freecodecamp-logo.png';
import Boton from './components/Boton';
import Contador from './components/Contador';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      numClicks: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }
  
  manejarClick(){
    console.log("Click");
    this.setState(({ numClicks }) => ({numClicks: numClicks + 1}));
  }
  
  reiniciarContador(){
    console.log("Reiniciar");
    this.setState({numClicks: 0}); 
  }

  render(){
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
          <Contador numClicks={this.state.numClicks}/>
          <Boton 
            texto='Click'
            esBotonDeClick={true}
            manejarClick={this.manejarClick}
          />
          <Boton 
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClick={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

export default App
