import { styled } from "styled-components";
import bannerBackground from "./assets/banner.png";
import Banner from "./componentes/Banner";
import BarraLateral from "./componentes/BarraLateral";
import Cabecalho from "./componentes/Cabecalho";
import EstilosGlobais from "./componentes/EstilosGlobais";

const AppContainer = styled.div`
  width: 90%; /* Largura relativa */
  max-width: 3000px; /* Largura máxima ajustada para telas grandes */
  margin: 0 auto; /* Centralizar horizontalmente */
  padding: 0 40px; /* Adiciona um pouco de espaço nas laterais */
`;


const MainContainer = styled.main`
  display: flex;
  gap: 24;
`;

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <Banner
            texto="A galeria mais completa de fotos do espaço!"
            backgroundImage={bannerBackground}
          />
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
