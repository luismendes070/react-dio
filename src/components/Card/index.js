import { useState } from "react";

const Card = () => {
  const [valor, setValor] = useState(2);

  function Adicionar(){

      setValor(valor + 1);

  } // end function Adicionar

  function Remover(){

    setValor(valor - 1);
    
} // end function Remover

// (event)=>{setValor(event.target.value + 1)}

  return (
    <div class="card">
      <div class="card-header">
        <p>Texto no card</p>
      </div>

      <div class="card-body">
        <button type="button" className="btn btn-sucess" onClick={Adicionar}>
          Adicionar
        </button>

        <button type="button" className="btn btn-danger" onClick={Remover}>
          Remover
        </button>

        <p>{valor}</p>
      </div>
    </div>
  );
};

export default Card;
