import styled from "styled-components";

const StyledHeader = styled.header`
  height: 100vh;
  width: 100%;
  background-color:var(--very-dark-cyan);
`;

function ProjectsHeader() {
  return <StyledHeader>This is the project page</StyledHeader>;
}

export default ProjectsHeader;
