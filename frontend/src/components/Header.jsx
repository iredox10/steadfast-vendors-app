import styled from "styled-components"


const Header = ({text,primaryColor,secondaryColor,tertiaryColor}) => {
    const Title = styled.h1`
    color: ${primaryColor};
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem;
    position: relative;
    &::after{
        content: '';
        position: absolute;
        width: 15%;
        height: .1rem;
        background: ${secondaryColor};
        left: 50%;
        transform: translateX(-50%);
        bottom: -.6rem;
        border-radius: 10%;
        z-index: -1;
    }
    &::before{
        content: '';
        position: absolute;
        width: 10%;
        height: .4rem;
        border-radius: 12px;
        background: ${tertiaryColor};;
        left: 50%;
        transform: translateX(-50%);
        bottom: -.8rem;
    }
    `
  return (
        <Title>{text}</Title>
  )
}

export default Header