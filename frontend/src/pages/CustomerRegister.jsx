import React, { useRef, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import UseFetch from "../hooks/UseFetch"
import path from "../utils/path"
import axios from "axios"
import Nav from '../components/Nav'
import { UseAuthContext } from "../hooks/useAuthContext"

const CustomerRegister = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { bgColor, secondaryColor } = location.state
  const {
    data: vendor,
    error,
    isPending,
  } = UseFetch(`${path}/vendor/get-vendor/${id}`)

  const {dispatch} = UseAuthContext()

  const fullName = useRef()
  const username = useRef()
  const email = useRef()
  const state = useRef()
  const phoneNumber = useRef()
  const selectPassword = useRef()
  const confirmPassword = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      fullName.current.value === "" ||
      username.current.value === "" ||
      email.current.value === "" ||
      state.current.value === "" ||
      phoneNumber.current.value === "" ||
      selectPassword.current.value === "" ||
      confirmPassword.current.value === ""
    ) {
      alert("please fill in all fields")
      return
    }
    if (selectPassword.current.value !== confirmPassword.current.value) {
      alert("passwords do not match")
      return
    }
    console.log(username.current.value)
    try {
      const res = await axios.post(`${path}/customer/register/${id}`, {
        fullName: fullName.current.value,
        username: username.current.value,
        email: email.current.value,
        state: state.current.value,
        phoneNumber: phoneNumber.current.value,
        password: selectPassword.current.value,
      })
      const customerId = res.data.customer.id
      localStorage.setItem('user',JSON.stringify(res.data.customer))
      dispatch({type:"LOGIN", payload: res.data.customer})
      navigate(`/customer-dashboard/${customerId}`)
    } catch (error) {
      console.log(error)
    }
  }

  const Container = styled.div`
    background-color: ${bgColor};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
  `
  const Title = styled.h1`
    text-transform: capitalize;
    background-color: ${secondaryColor};
    padding: 0.5rem 2rem;
    color: white;
    font-size: 2rem;
  `

  const Form = styled.form`
    background: white;
    padding: 0rem;
    min-width: 50vw;
    margin-top: 1rem;
  `
  const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  const InputContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    padding: 0rem 2rem;
    width: 100%;
  `
  const Label = styled.label`
    font-weight: medium;
  `
  const Input = styled.input`
    min-width: 100%;
    padding: 0.5rem 0.5rem;
    border: 2px solid ${bgColor};
  `
  const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    background: ${bgColor};
    padding: 0.5rem 1rem;
    width: 80%;
    margin: 1rem auto;
    color: white;
    &:hover {
      background-color: ${secondaryColor};
    }
  `

  return (
    <>
      {vendor && (
        <div>
          <Nav logo={vendor.logo}  vendorId={id}  bgColor={bgColor} secondaryColor={secondaryColor} tertiaryColor={vendor.tertiaryColor} />
        <Container>
          <Form onSubmit={handleSubmit}>
            <Title>register</Title>
            <InputContainer>
              <Label for="fullName">full name</Label>
              <Input
                type="text"
                name="fullName"
                ref={fullName}
              />
            </InputContainer>
            <InputContainer>
              <Label for="username">username</Label>
              <Input
                type="text"
                name="username"
                ref={username}
              />
            </InputContainer>
            <InputContainer>
              <Label for="email">email</Label>
              <Input
                type="email"
                name="email"
                ref={email}
              />
            </InputContainer>
            <InputContainer>
              <Label for="state">state</Label>
              <Input
                type="text"
                name="state"
                ref={state}
              />
            </InputContainer>
            <InputContainer>
              <Label for="phoneNumber">phone number</Label>
              <Input
                type="number"
                name="phoneNumber"
                ref={phoneNumber}
              />
            </InputContainer>
            <InputContainer>
              <Label for="password">select password</Label>
              <Input
                type="password"
                name="password"
                ref={selectPassword}
              />
            </InputContainer>
            <InputContainer>
              <Label for="password">confirm password</Label>
              <Input
                type="password"
                name="password"
                ref={confirmPassword}
              />
            </InputContainer>
            <Button type="submit">Register</Button>
          </Form>
        </Container>
        </div>
      )}
    </>
  )
}
export default CustomerRegister
