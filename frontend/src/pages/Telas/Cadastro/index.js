import './styles.css';
import { TelaCadastro, Centro, Inputs, Lg, Titulo } from './styles';

import { Link } from 'react-router-dom';

import Logo from "../../../assets/Logo.png"

const Cadastro = () => {
    return (
        <>
            <TelaCadastro>
                <Centro>
                    <Titulo>Cadastre-se</Titulo>
                    <Lg>
                        <img src={Logo} alt="Logo" className="logo"/>
                    </Lg>
                    <Inputs>
                        <input className='nome' id="nome" type="text" name='nome' placeholder="Nome Completo" required />
                        <br />    
                        <input className='rm' id="rm" type="text" name='rm' placeholder="RM" required/>
                        <br />
                        <input className='email' id="email" type="text" name='email' placeholder="E-mail Institucional" required />
                        <br />
                        <input className='email' id="email" type="password" name='senha' placeholder="Senha" required/>
                    </Inputs>
                    <div className='botao'>
                        <Link to="/login">
                            <button className='btn' type="submit">Cadastrar</button>
                        </Link>
                    </div>
                </Centro>
            </TelaCadastro>
        </>
    );
}
export default Cadastro;