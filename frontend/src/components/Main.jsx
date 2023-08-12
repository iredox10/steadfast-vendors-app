import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import illustration from "../assets/illustration.svg"
import { UseAuthContext } from "../hooks/useAuthContext"

const Main = ({
  vendorId,
  dispatch,
  user,
  bgColor,
  secondaryColor,
  tertiaryColor,
  companyName,
  about,
}) => {
  const Section = styled.div`
    background-color: ${bgColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60vh;
    padding-inline: 4rem;
    padding-block: 2rem;
  `
  const Text = styled.div`
    flex-basis: 45%;
    @media (max-width: 800px) {
      flex-basis: 100%;
      text-align: center;
    }
  `
  const Title = styled.h1`
    color: white;
    /* opacity: 0.8; */
    text-transform: capitalize;
    font-weight: bold;
    font-size: 5rem;
    @media (max-width: 800px) {
      font-size: 3rem;
      margin: 1rem 0;
    }
  `
  const Welcome = styled.h2`
    color: white;
    opacity: 0.8;
    font-size: 1.5rem;
  `
  const About = styled.p`
    color: white;
    text-transform: capitalize;
    font-size: 0.9rem;
  `
  const Links = styled.div`
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    @media (max-width: 800px) {
      /* display: none; */
      justify-content: center;
    }
  `
  const ImageContainer = styled.div`
    @media (max-width: 800px) {
      display: none;
    }
  `
  const Logo = styled.img`
    flex: 1;
    width: 100%;
  `

  const LoginBtn = styled.button`
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    background-color: ${secondaryColor};
    border-radius: 0.4rem;
    &:hover {
      color: white;
    }
  `
  const RegisterBtn = styled.button`
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    border: 2px solid ${secondaryColor};
    border-radius: 0.4rem;
    &:hover {
      color: white;
    }
  `
  const { id } = useParams()

  

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("user")
    dispatch({ type: "LOGOUT" })
    navigate(`/vendor/${vendorId}`)
  }


  return (
    <Section>
      <Text>
        <Welcome>Welcome to</Welcome>
        <Title>{companyName}</Title>
        <About>{about}</About>
        {user ? (
          <Links>
            <RegisterBtn onClick={handleLogout}>logout</RegisterBtn>
            <LoginBtn>
              {" "}
              <Link to={`/customer-dashboard/${user.id}`}> Dashboard</Link>{" "}
            </LoginBtn>
          </Links>
        ) : (
          <Links>
            <RegisterBtn>
              {" "}
              <Link
                to={`/customer-register/${id}`}
                state={{ bgColor, secondaryColor }}
              >
                register
              </Link>
            </RegisterBtn>
            <LoginBtn>
              {" "}
              <Link
                to={`/customer-login/${id}`}
                state={{ bgColor, secondaryColor }}
              >
                {" "}
                login
              </Link>{" "}
            </LoginBtn>
          </Links>
        )}
      </Text>
      <ImageContainer>
        <Logo
          src={illustration}
          alt="illustration"
        />
      </ImageContainer>
    </Section>
  )
}

export default Main
