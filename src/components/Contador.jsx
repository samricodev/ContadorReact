import '../css/Contador.css'
import React from 'react';

class Contador extends React.Component{
  render(props){
    return(
      <div className="contador">
        { this.props.numClicks }
      </div>
    );
  }
}

export default Contador;