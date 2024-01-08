import GlobalStyle from "./styles/GlobalStyles";
import Greetings from "./components/Greetings";
import styled from "styled-components";
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 100%;

  @media (min-width: 768px) {
  }
`;

function App() {
  return (
    <StyledMain>
      <GlobalStyle />
      <Greetings />
      <>Another Element</>
    </StyledMain>
  );
}

export default App;
