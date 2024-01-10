import styled from "styled-components";

const StyledProjects = styled.div`
  height: 100vh;
  width: 100%;
  background-color:var(--very-dark-cyan);

  scroll-snap-align: center;
`;

function Projects() {
  return <StyledProjects>This is the project page</StyledProjects>;
}

export default Projects;
