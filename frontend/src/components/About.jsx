import { Link } from "react-router-dom"
import Header from "./Header"
import styled from "styled-components"

const About = ({ about, primaryColor, secondaryColor, tertiaryColor }) => {
  const Container = styled.div`
    min-height: 50vh;
    text-align: center;
  `
  const About = styled.p`
    max-width: 50%;
    margin: 0 auto;
  `
  const LearnMoreBtn = styled.button`
    border: 3px solid ${primaryColor};
    border-radius: 5px;
    padding: 1rem 2rem;
    margin: 2rem 0;
    text-transform: capitalize;
    font-weight: bold;
    &:hover {
      background-color: ${primaryColor};
      color: white;
    }
  `
  return (
    <>
      <Header
        text="About"
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        tertiaryColor={tertiaryColor}
      />
      <Container>
        <About>{about}</About>
        <LearnMoreBtn>
          <Link to={`vendor/learn-more`}>learn more</Link>
        </LearnMoreBtn>
      </Container>
    </>
  )
}

export default About
