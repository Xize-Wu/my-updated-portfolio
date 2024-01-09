import styled from "styled-components";
import Projects from "./Projects";
import Greetings from "./Greetings";

const StyledLayout = styled.div``;
function AppLayout() {
  return (
    <StyledLayout>
      <Greetings />
      <Projects />
    </StyledLayout>
  );
}

export default AppLayout;
