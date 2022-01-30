import "./styles.css";
import {Container} from "../../styles/global";
import { Main, Titulo, Centro, Autor, Frase } from "./styles";

import Menu from "../../components/Menu/index";
import Footer from "../../components/Footer/index";

const Home = () => {
    return (
        <>
            <Menu />
            <Container>
                <Main>
                    <Titulo>Olá, Seja Bem-Vindo(a) ao Sistema Arte da Leitura</Titulo>
                    <Centro>
                        <Frase>"Ler é para a mente o que é o exercício para o corpo."</Frase>
                        <Autor>- Richard Steele</Autor>
                    </Centro>
                </Main>
            </Container>
            <Footer />
        </>
    );
}
export default Home;