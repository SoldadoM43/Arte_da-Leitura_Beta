import './styles.css';

import Logo from "../../../assets/Logo.png"

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
                        <button className='btn1'>Acessar</button>
                        <br />
                        <a className='link' href='#'>Esqueci Minha Senha</a>
                    </div>
                </main>
            </div>
        </>
    );
}
export default Login;