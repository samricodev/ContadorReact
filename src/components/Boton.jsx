import '../css/Boton.css'
import React from 'react';

class Boton extends React.Component{
  render(){
    return(
      <button
        className={ this.props.esBotonDeClick ? 'btn-click': 'btn-reiniciar' }
        onClick={this.props.manejarClick}
      >
        {this.props.texto}
      </button>
    );
  }
}

export default Boton;