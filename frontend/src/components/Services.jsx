import React from "react"
import Header from "./Header"
import styled from "styled-components"

const Services = ({ primaryColor, secondaryColor, tertiaryColor }) => {
  const Wrapper = styled.div`
    background-color: ${primaryColor};
    min-height: 60vh;
    margin: 4rem 0;
  `
  const Container = styled.div`
    display: flex;
  `
  return (
    <div id="services">
      <Header
        text="Services"
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        tertiaryColor={tertiaryColor}
      />
      <Wrapper>
        <Container></Container>
      </Wrapper>
    </div>
  )
}

export default Services
