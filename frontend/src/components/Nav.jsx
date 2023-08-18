import { Link } from "react-router-dom"
import styled from "styled-components"
import { UseAuthContext } from "../hooks/useAuthContext"
export default function dNav({vendorId,user, bgColor, secondaryColor, tertiaryColor,logo }) {
  const Div = styled.div`
    background-color: ${bgColor};
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 1rem;
    @media (max-width: 800px) {
      /* justify-content: space-around;  */
    }
  `
  const Links = styled.div`
    display: flex;
    gap: 2rem;
    text-transform: capitalize;
    @media (max-width: 800px) {
      gap: 0.1rem;
    }
  `
  const Container = styled.div``
  const ImageContainer = styled.div``
  const Logo = styled.img`
    flex: 1;
    width: 100%;
  `
  const Button = styled.button`
    padding: 1rem;
    &:hover {
      color: ${secondaryColor};
    }
    @media (max-width: 800px) {
      padding: 0.4rem;
    }
  `
  const GetStartedBtn = styled.button`
    background-color: ${secondaryColor};
    padding: 1rem;
    &:hover{
      color: ${bgColor};
    }
    @media (max-width: 800px) {
      padding: 0.4rem;
    }
  `
  const DashboardBtn = styled.button`
  background-color: ${secondaryColor};
    padding: 1rem;
    &:hover{
      color: ${bgColor};
    }
    @media (max-width: 800px) {
      padding: 0.4rem;
    }
  `

  return (
    <Div>
      <ImageContainer>
        <img src={logo} alt ="logo" />
      </ImageContainer>
      <Links>
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="">Services</Link>
        </Button>
        <Button>
          <Link to="">About</Link>
        </Button>
        <Button>
          <Link to="">Contact</Link>
        </Button>
        <Container>
         {user ? <DashboardBtn><Link to={`/customer-dashboard/${user.id}`}>Dashboard</Link></DashboardBtn> : <GetStartedBtn> <Link to={`/customer-register/${vendorId}`}> Get Started </Link></GetStartedBtn>}
        </Container>
      </Links>
    </Div>
  )
}
