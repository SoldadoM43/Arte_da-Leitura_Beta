import './styles.css';

import Logo from "../../../assets/Logo.png"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='login'>
                <main className='centro'>
                    <p className='titulo'>Login</p>
                    <div className='div_logo'>
                        <img src={Logo} alt="Logo" className="logo"/>
                    </div>
                    <div className='inputs'>
                        <input className='email' id="email" type="text" name='email' placeholder="E-mail" required/>
                        <br />
                        <input className='email2' id="email2" type="password" name='senha' placeholder='Senha' required/>
                        <br />
                        <br />
                        <br />
                        <Link to="/home">
                            <button className='btn1'>Acessar</button>
                        </Link>
                        <br />
                        <Link className='link' to='/senha'>Esqueci Minha Senha</Link>
                    </div>
                </main>
            </div>
        </>
    );
}
export default Login;