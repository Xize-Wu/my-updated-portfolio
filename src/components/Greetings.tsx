import styled from "styled-components";

import Navbar from "./Greetings/Navbar";
import placeholderImage from "../assets/placeholder.jpg";

const StyledGreetings = styled.div`
  background-color: black;
  color: var(--grayish-cyan);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;

  scroll-snap-align: center;

`;

const StyledInfo = styled.section`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 50%;
`;

const StyledH1 = styled.h1`
  font-size: 3.5rem;
`;

const StyledSkills = styled.div`
  padding-top: 1rem;
  padding-bottom: 5rem;
`;

const StyledLeftColumn = styled.div`
  flex-direction: column;
  display: grid;
  grid-template: 2fr / 1fr;
`;

const StyledImage = styled.img`
  max-width: 50%; /* Adjust the width as needed */
  min-height: 100%;
  padding-right: 2rem;
  height: auto; /* Maintain aspect ratio */
`;

function Greetings() {
  return (
    <StyledGreetings>
      <StyledImage src={placeholderImage} alt="Placeholder Image" />

      <StyledInfo>
        <Navbar />
        <StyledLeftColumn>
          <StyledH1>Hello, I'm Aster.</StyledH1>
          <div>I'm a (insert typing animation here)</div>
          <StyledSkills>
            <p>Java Script | Typescript | Ruby | Python</p>
            <p>
              React | Vue.js | Vite | Ajax | JQuery | SASS | Bootstrap |
              Tailwind CSS
            </p>
            <p>Next.js | Node.js | Express | Rails</p>
            <p>Storybook | Cypress | Jest | Mocha | Chai</p>
            <p>Git | PostgreSQL | WordPress</p>
          </StyledSkills>
        </StyledLeftColumn>
      </StyledInfo>
    </StyledGreetings>
  );
}

export default Greetings;
