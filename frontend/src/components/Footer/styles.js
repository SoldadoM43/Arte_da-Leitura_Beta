import styled from "styled-components";

export const Container = styled.div`
    bottom: 0;
    display: flex;
    width: 1600px;
    height: 370px;
    position: fixed;
    flex-direction: row;
    padding-top: 15px;
    padding-left: 20px;
    margin-left: 330px;
    padding-right: 20px;
    align-items: flex-start;
    background-color: black;
    justify-content: space-evenly;
`;
export const Sobre = styled.div`
    z-index: 1;
    width: 533px;
    padding-top: 0px;
    position: absolute;
    padding-left: 20px;
    padding-right: 20px;
    backgorund-color: red;
`;
export const Autores = styled.div`
    width: 533px;
    padding-top: 0;
    position: absolute;
    padding-left: 20px;
    padding-right: 20px;
    backgorund-color: green;
`;
export const Contato = styled.div`
    width: 533px;
    padding-top: 0;
    position: absolute;
    padding-left: 20px;
    padding-right: 30px;
    backgorund-color: blue;
`;
export const Titulo = styled.p`
    color: white;
    font-size: 25px;
    text-align: center;
    margin-bottom: 25px;
`;
export const Texto = styled.p`
    color: white;
    font-size: 20px;
`;