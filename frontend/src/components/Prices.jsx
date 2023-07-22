import Header from "./Header"
import styled from "styled-components"

const Prices = ({primaryColor,secondaryColor,tertiaryColor}) => {
  const Wrapper = styled.div`
    background-color: ${primaryColor};
    min-height: 60vh;
    margin: 4rem 0;
  `
  const Container = styled.div`
    display: flex;
  `
  return (
    <>
    <Header
        text="Prices"
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        tertiaryColor={tertiaryColor}
      />
<Wrapper>
        <Container></Container>
      </Wrapper>
      </>
  )
}

export default Prices