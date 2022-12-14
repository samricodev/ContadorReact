import '../css/Boton.css'

function Boton({texto, esBotonDeClick, manejarClick}){
  return(
    <button
      className={ esBotonDeClick ? 'btn-click': 'btn-reiniciar' }
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export default Boton;