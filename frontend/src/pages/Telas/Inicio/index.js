import './styles.css';

import Logo from "../../../assets/Logo.png"
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <>
            <div className='inicio'> 
                <main className='centro'>
                    <p className='titulo'>Olá, Seja Bem-Vindo(a)</p>
                    <div className='div_logo'>
                        <img src={Logo} alt="Logo" className="logo"/>
                    </div>
                    <div className='botoes'>
                        <div className='div_btn'>
                            <Link to="/login">
                                <button className='btn1'>Acessar</button>
                            </Link>
                        </div>
                        <div className='div_btn'>
                            <Link to="/cadastro">
                                <button className='btn2'>Cadastrar</button>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
export default Inicio;