import "./styles.css";

import Perfil from "../../assets/Perfil.jpg";

import {FiMail} from "react-icons/fi"
import {GoBook} from "react-icons/go";
import {IoHome} from "react-icons/io5";
import {BsBookmark} from "react-icons/bs";
import {BiHelpCircle} from "react-icons/bi";
// import {HiOutlineLogin} from "react-icons/hi";
import {AiOutlineInfoCircle} from "react-icons/ai"; 
import {IoMdHeartEmpty, IoMdNotificationsOutline} from "react-icons/io";

const Menu = () => {
    return (
        <div className="navigation">
            <ul>
                <li className='list'>
                    <a href="home">
                        <span className="text"><IoHome className='icone'/> Home</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="bibliotecas">
                        <span className="text"><GoBook className='icone'/> Bibliotecas</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="favoritos">
                        <span className="text"><IoMdHeartEmpty className='icone'/> Favoritos</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="salvos">
                        <span className="text"><BsBookmark className='icone'/> Salvos</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="ajuda">
                        <span className="text"><BiHelpCircle className='icone'/> Ajuda</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="informacoes">
                        <span className="text"><AiOutlineInfoCircle className='icone'/> Informações</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="menssagens">
                        <span className="text"><FiMail className='icone'/> Mensagens</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="notificacoes">
                        <span className="text"><IoMdNotificationsOutline className='icone'/> Notificações</span>
                    </a>
                </li>
                <li className='list2'>
                  <a href="perfil" className="profile-details">
                      <div className="profile-content">
                        <p href="perfil">
                          <img
                            className="imgp"
                            src={Perfil}
                            alt="Imagem de Perfil"
                          />
                        </p>
                        <div className="nome-job">
                          <p className="nome">Diego Novaes</p>
                          <p>
                            <div className="job">
                              <table>
                                <tr>
                                  <td>#6640</td>
                                  <td><p className="espaco">.........</p></td>
                                  <td>3º A</td>
                                </tr>
                              </table>
                            </div>
                          </p>
                        </div>
                      </div>
                  </a>
                </li>
            </ul>
        </div>
    );
}
export default Menu;