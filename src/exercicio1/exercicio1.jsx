import { useState } from "react"

const [numero, setNumero] = useState(0);


function adicionar(){
    array[numero]
    
}


export default function Exercicio1(){
    return(
        <main>
            <h1>número</h1>
            <input onChange={e=> setNumero(Number(e.target.value))}/>
            <button onClick={adicionar}>
                add
            </button>
            <button>
                inverter
            </button>
        </main>


    )
}