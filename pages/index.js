import { useState } from "react";



function Home(){
    return(
        <div className="container">
            <h2>Home</h2>
            <Contador />

        </div>
        
    )
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Add numero</button>
        </div>
    )
}

export default Home