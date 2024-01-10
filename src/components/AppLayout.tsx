import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Projects from "./Projects";
import Greetings from "./Greetings";
import ContactMe from "./ContactMe";

const StyledLayout = styled.div`
  overflow: hidden;
`;

function AppLayout() {
  return (
    <StyledLayout>
      <Greetings />
      <Projects />
      <ContactMe />
    </StyledLayout>
  );
}

export default AppLayout;
