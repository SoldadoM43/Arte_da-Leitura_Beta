import {BrowserRouter, Route, Routes} from "react-router-dom";

import Senha from "../pages/Telas/Senha";
import Home from "../pages/Home/index";
import Inicio from "../pages/Telas/Inicio/index";
import Login from "../pages/Telas/Login/index";
import Cadastro from "../pages/Telas/Cadastro";
import Bibliotecas from "../pages/Bibliotecas/index";

export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/senha" element={<Senha/>}/>
            <Route path="/home" element={<Home/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/bibliotecas" element={<Bibliotecas />}/>
            </Routes>
        </BrowserRouter>
    );
}