
import "./styles.css";

import Menu from "../../components/Menu/index";
import CardPreviaFisica from "../../components/Cards/Previas/BFisica";

const Bibliotecas = () => {
    return (
        <>
            <Menu />
            <div className="container">
                <div className="biblioteca">
                    <p className="titulo">Biblioteca Física</p>
                    <p className="frase">Possibilidade de reservar um livro físico para buscar.</p>
                    <CardPreviaFisica />
                    <button className="btn">Ver Biblioteca</button>
                </div>
                <br />
                <br />
                <div className="biblioteca">
                    <p className="titulo">Biblioteca Virtual</p>
                    <p className="frase">Possibilidade de baixar um livro virtual e le-lo onde quiser.</p>
                    <button className="btn">Ver Biblioteca</button>
                </div>
                <br />
                <br />
                <div className="biblioteca">
                    <p className="titulo">Biblioteca Híbrida</p>
                    <p className="frase">Possibilidade de escolher entre um livro físico ou um livro virtual para ler.</p>
                    <button className="btn">Ver Biblioteca</button>
                </div>
                <br />
                <br />
            </div>
        </>
    );
}
export default Bibliotecas;