import './styles.css';

import Logo from "../../../assets/Logo.png"
import { Link } from 'react-router-dom';

const Cadastro = () => {
    return (
        <>
            <div className='cadastro'>
                <main className='centro'>
                    <p className='titulo'>Cadastre-se</p>
                    <div className='div_logo'>
                        <img src={Logo} alt="Logo" className="logo"/>
                    </div>
                    <div className="inputs">
                        <input className='nome' id="nome" type="text" name='nome' placeholder="Nome Completo" required />
                        <br />    
                        <input className='rm' id="rm" type="text" name='rm' placeholder="RM" required/>
                        <br />
                        <input className='email' id="email" type="text" name='email' placeholder="E-mail Institucional" required />
                        <br />
                        <input className='email' id="email" type="password" name='senha' placeholder="Senha" required/>
                    </div>
                    <div className='botao'>
                        <Link to="/login">
                            <button className='btn1' type="submit">Cadastrar</button>
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}
export default Cadastro;