import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

import AppLayout from "./components/AppLayout";

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
      <AppLayout />
    </StyledMain>
  );
}

export default App;
