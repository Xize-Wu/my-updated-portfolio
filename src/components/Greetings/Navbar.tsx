import styled from "styled-components";
import NavbarButton from "./NavbarButton";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <NavbarButton />
      <NavbarButton />
    </StyledNavbar>
  );
}

export default Navbar;
