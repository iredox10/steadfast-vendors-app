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

const Vendor = () => {
    const {id} = useParams()
    const {data:vendor,error,loading} = UseFetch(`${path}/vendor/get-vendor/${id}}`)
    const {data:services,error:err,loading:pending} = UseFetch(`${path}/vendor/get-data-services/${id}`)

  return (
    <>
    {vendor && 
    <div>
    <Nav bgColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor}/>
    <Main bgColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor} companyName={vendor.companyName} about={vendor.about}  />
    <Services id={id} services={services} primaryColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor} />
    <Prices services={services} id={id} primaryColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor} />
    <About about={vendor.about} primaryColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor} />
    <Contact contactEmail={vendor.contactEmail} contactAddress={vendor.contactAddress} contactNumber={vendor.contactNumber} id={id} primaryColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor} />
    <Footer textColor={vendor.textColor} companyName={vendor.companyName}  primaryColor={vendor.primaryColor} secondaryColor={vendor.secondaryColor} tertiaryColor={vendor.tertiaryColor} />
    </div>
    }
    </>
  )
}

export default Vendor
