import { Link } from "react-router-dom"
import UseFetch from "../hooks/UseFetch"
import path from "../utils/path"
import Header from "./Header"
import styled from "styled-components"
import { FaShoppingBasket } from "react-icons/fa"

const Prices = ({id,services,primaryColor,secondaryColor,tertiaryColor}) => {
  const Wrapper = styled.div`
    /* background-color: ${primaryColor}; */
    min-height: 60vh;
    margin: 4rem 0;
    padding: 1rem;
  `
  const Container = styled.div`
    display: flex;
  `

const {data:dataServices,error,loading} = UseFetch(`${path}/vendor/get-data-plans-by-vendor/${id}`)
console.log(dataServices);

  return (
    <>
    <Header
        text="Prices"
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        tertiaryColor={tertiaryColor}
      />
<Wrapper>
        <Container>
        <div className='grid grid-cols-4 gap-3 '>
          {dataServices && dataServices.map(service => (
            <div key={service.id} className='shadow-lg bg-white'>
              <div className='flex flex-col items-center bg-yellow-200'>
              <img src={service.logo} alt="service logo" className='w-[30%]' />
              <p className="font-bold capitalize py-2">{service.name}</p>
              </div>
              <div className='p-2 text-center'>
                {service.dataPlans.map(plan => (
                  <div key={plan.id} className='flex justify-center gap-2'>
                    <p className="text-center font-bold">{plan.data}</p>
                    <p className="text-center font-bold">{plan.amount}</p>
                    <p className="text-center font-bold">{plan.limit}</p>
                  </div>
                ))}
                <Link to="/" className="flex gap-2 capitalize"><FaShoppingBasket /> buy</Link>
              </div>
            </div>
          ))}
        </div>
        </Container>
      </Wrapper>
      </>
  )
}

export default Prices