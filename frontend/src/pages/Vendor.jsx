import React from 'react'
import { useParams } from 'react-router-dom'
import path from '../utils/path'
import UseFetch from '../hooks/UseFetch'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Services from '../components/Services'
import Prices from '../components/Prices'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { UseAuthContext } from '../hooks/useAuthContext'

const Vendor = () => {
    const {id} = useParams()
    const {data:vendor,error,loading} = UseFetch(`${path}/vendor/get-vendor/${id}}`)
    const {data:services,error:err,loading:pending} = UseFetch(`${path}/vendor/get-data-services/${id}`)
  const {state,dispatch} = UseAuthContext()
  const user= state.payload
    
  return (
    <>
    {vendor && 
    <div>
    <Nav user={user} vendorId={vendor.id}  bgColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor}/>
    <Main dispatch={dispatch} user={user} vendorId={vendor.id}  bgColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor} companyName={vendor.companyName} about={vendor.about}  />
    <Services id={id} services={services} primaryColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor} />
    <Prices user={user} vendorId={vendor.id} services={services} bgColor={vendor.primaryColor} id={id} primaryColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor} />
    <About about={vendor.about} primaryColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor} />
    <Contact contactEmail={vendor.contactEmail} contactAddress={vendor.contactAddress} contactNumber={vendor.contactNumber} id={id} primaryColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor} />
    <Footer textColor={vendor.textColor} companyName={vendor.companyName}  primaryColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor} />
    </div>
    }
    </>
  )
}

export default Vendor
