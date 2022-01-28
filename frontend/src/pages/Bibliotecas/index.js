
import "./styles.css";
import {Container} from "../../styles/global";
import { Biblioteca, Titulo, Frase } from "./styles";

import Menu from "../../components/Menu/index";
import CardPreviaFisica from "../../components/Cards/Previas/BFisica";

const Bibliotecas = () => {
    return (
        <>
            <Menu />
            <Container>
                <Biblioteca>
                    <Titulo>Biblioteca Física</Titulo>
                    <Frase>Possibilidade de reservar um livro físico para buscar.</Frase>
                    <button className="btn">Ver Biblioteca</button>
                </Biblioteca>
                <br />
                <br />
                <Biblioteca>
                    <Titulo>Biblioteca Virtual</Titulo>
                    <Frase>Possibilidade de baixar um livro virtual e le-lo onde quiser.</Frase>
                    <button className="btn">Ver Biblioteca</button>
                </Biblioteca>
                <br />
                <br />
                <Biblioteca>
                    <Titulo>Biblioteca Híbrida</Titulo>
                    <Frase>Possibilidade de escolher entre um livro físico ou um livro virtual para ler.</Frase>
                    <button className="btn">Ver Biblioteca</button>
                </Biblioteca>
                <br />
                <br />
            </Container>
        </>
    );
}
export default Bibliotecas;