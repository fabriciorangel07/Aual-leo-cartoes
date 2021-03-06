import React from "react"
import './App.css'
import Cartao from "./layout/Cartao";
import Componente1 from './componentes/PrimeiroCom';
import Componente2 from './componentes/SegundoCom';
import Aluno from './componentes/Aluno';
import CompAleatorio from './componentes/ComAleatorio';
import Familia from "./componentes/familia";
import Membro from "./componentes/FamiliaMembro";

const App = () => {
    return (
        <div className="App">
            <h2>Fundamentos</h2>
            <div className="Cartoes">

                <Cartao titulo = "POO"
                    color = "#8AA">
                        <Familia nome = "João" sobrenome = "Costa"/>
                        <Familia nome = "Ana" sobrenome = "Costa"/>
                        <Familia nome = "Marcos" sobrenome = "Costa"/>
                </Cartao>

                <Cartao titulo="Primeiro Componente"
                    color = '#FB2'
                    radio = {20}>
                    <Componente1 />
                </Cartao>

                <Cartao titulo="Segundo componente"
                    color = '#AA5EE0'>
                    <Componente2
                        titulo="Aooopa garotada do React"
                        subtitulo="O trem é brabo!!!"
                        numero={9}
                    />
                </Cartao>

                <Cartao titulo="Aluno/Escola"
                    color = "#49DCE0">
                    <Aluno
                        nome="Fulano"
                        nota={6.3} />
                </Cartao>


                <Cartao titulo="Número Aleatorio">
                    <CompAleatorio min={5}
                        max={100}>
                    </CompAleatorio>
                </Cartao>
            </div>
        </div>
    )
}

export default App