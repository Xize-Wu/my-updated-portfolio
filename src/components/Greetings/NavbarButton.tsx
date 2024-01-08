import styled from "styled-components";

const StyledButton = styled.button`
  background-color: rgba(0,0,0,0);
  color: var(--grayish-cyan);
  border: 0px;
  font-size: 1.5rem;
  font-family: "Times New Roman", Times, serif;
  margin:0.5rem;
`;

function NavbarButton() {
  return <StyledButton>Projects</StyledButton>;
}

export default NavbarButton;
