import { styled } from "styled-components";

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center; /* Centraliza horizontalmente */
    height: 328px; /* Aumenta a altura do banner */
    width: 100%; /* Usa toda a largura disponível */
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover; /* Ajusta o tamanho da imagem para cobrir todo o banner */
`;


const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
    text-align: left; /* Alinha o texto à esquerda */
`

const Banner = ({texto, backgroundImage}) => {
    return (<FigureEstilizada $backgroundImage={backgroundImage}>
        <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>)
}

export default Banner