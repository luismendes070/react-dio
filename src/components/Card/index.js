import { useState } from "react";
import Button from "../Button";

const Card = () => {
  const [valor, setValor] = useState(0);

  function Adicionar() {
    setValor(valor + 1);
  } // end function Adicionar

  function Remover() {
    setValor(valor - 1);
  } // end function Remover

  // (event)=>{setValor(event.target.value + 1)}

  return (
    <div className="card">
      <div className="card-header">
        <p>Texto no card</p>
      </div>

      <div className="card-body">
        <Button type="button" className="btn btn-sucess" onClick={Adicionar}>
          Adicionar
        </Button>

        <Button type="button" className="btn btn-danger" onClick={Remover}>
          Remover
        </Button>

        <p>{valor}</p>
      </div>
    </div>
  );
};

export default Card;
