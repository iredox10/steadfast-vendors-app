import { Link } from "react-router-dom"
import styled from "styled-components"

const Footer = ({companyName,primaryColor,secondaryColor,tertiaryColor,textColor}) => {
    const Footer = styled.footer`
        background-color: ${primaryColor};
        padding: 2rem 1rem;
        display: flex;
        justify-content: space-between;
    `
    const Text = styled.p`
    text-transform: capitalize;
    color: white;
    font-weight: 500;
    `
    return(
        <>
            <Footer>
                <Text>{companyName}</Text>
                <Text>copyrights reserved</Text>
                <Text>powered by <Link target="_blank" className="underline hover:text-blue-500" to='https://www.steadfast.com'>steadyfast</Link> </Text>

            </Footer>
        </>
    )
}
export default Footer