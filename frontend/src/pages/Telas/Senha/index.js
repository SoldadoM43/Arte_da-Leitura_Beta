import './styles.css';

import Logo from "../../../assets/Logo.png"

const Senha = () => {
    return (
        <>
            <div className='senha'>
                <main className='centro'>
                    <p className='titulo'>Recuperação de Senha</p>
                    <div className='div_logo'>
                        <img src={Logo} alt="Logo" className="logo"/>
                    </div>
                    <div className='textos'>
                        <p className='texto1'>Digite seu e-mail cadastrado neste sistema para enviarmos sua senha, assim você poderá acessar novamente</p>
                        <p className='texto2'>P.S: Desta vez anote sua senha para não esquece-la novamente :)</p>
                    </div>
                    <div className='inputs'>
                        <input className='email' id="email" type="text" name='email' placeholder="E-mail Institucional" required/>
                        <br />
                        <br />
                        <br />
                        <button className='btn1'>Enviar</button>
                    </div>
                </main>
            </div>
        </>
    );
}
export default Senha;