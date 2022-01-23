import './styles.css';

import Logo from "../../../assets/Logo.png"

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
                        <button className='btn1'>Acessar</button>
                        </div>
                        <div className='div_btn'>
                            <button className='btn2'>Cadastrar</button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
export default Inicio;