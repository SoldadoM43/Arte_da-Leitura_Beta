import './styles.css';
import { Container, Titulo, Texto, Sobre, Autores, Contato } from "./styles";

import { VscLocation } from "react-icons/vsc";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";
import { FaFacebook, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="container">
      <table>
        <tr>
          <td>
            <Sobre>
              <Titulo>Centro Paula Souza</Titulo>
              <Texto>
                O Centro Paula Souza (CPS) é uma autarquia do Governo do Estado de
                São Paulo<br /> vinculada à Secretaria de Desenvolvimento Econômico.
                Presente em 368 municípios,<br /> a instituição administra 223 Escolas
                Técnicas (Etecs) e 73 Faculdades de Tecnologia<br /> (Fatecs) estaduais,
                com mais de 322 mil alunos em cursos técnicos de nível médio e
                superiores tecnológicos.
              </Texto>
            </Sobre>
          </td>
          <td>
            <Autores>
              <Titulo>Melhores Autores do Brasil</Titulo>
              <Texto>
                . Machado de Assis (1839-1908)
                <br />
                . Guimarães Rosa (1908-1967) <br />
                . Carlos Drummond de Andrade (1902-1987) <br />. Clarice Lispector
                (1920-1977)
              </Texto>
            </Autores>
          </td>
          <td>
            <Contato>
              <Titulo>Contato</Titulo>
              <Texto>
                <VscLocation className="mr-2" />
                Rua Bernadino de Campos n°809, Vila Baruta
                <br />
                Presidente Venceslau -19400-000 - SP
                <p className="link">
                  <AiFillPhone className="icon" />
                  <a href='#' className="link">3271-3687</a>
                </p>
                <p className="link">
                  <FaFacebook className="icon" />
                  <a
                    className="link"
                    href="https://www.facebook.com/etecpv"
                    target="_blank"
                  >
                    @etecpv
                  </a>
                </p>
              </Texto>
            </Contato>
          </td>
        </tr>
      </table>
    </Container>
  );
}
export default Footer;