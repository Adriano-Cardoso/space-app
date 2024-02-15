import styled from "styled-components";

const ItemListaEstilizado = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? '#7B78e5' : '#D9D9D9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
    
    img {
        width: 24px; /* Defina o tamanho desejado para os ícones */
        height: auto; /* Garante que a proporção da imagem seja mantida */
    }
`

const ItemNavegacao = ({children, iconeAtivo,  iconeInativo, ativo = false})  => {
    return (
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemListaEstilizado>
    );
}

export default ItemNavegacao;
