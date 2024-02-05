import React, { useState } from "react";

const Contador = (props) =>{
const [contador, setContador] = useState(0)

const incremento = () =>{
    setContador(contador+1)
}

    return(
        <div style={{
            color : props.color
        }}>
            <h3>Contador: {contador}</h3>
            <button onClick={incremento}>Incrementar</button>
        </div>
    )
}

export default Contador;