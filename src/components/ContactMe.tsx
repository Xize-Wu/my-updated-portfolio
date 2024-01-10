import styled from "styled-components";

const StyledContactMe = styled.div`
  height: 100vh;
  width: 100%;
  background-color:var(--very-dark-cyan);

  scroll-snap-align: center;
`;

function ContactMe() {
  return <StyledContactMe>This is the Contact Me page</StyledContactMe>;
}

export default ContactMe;
