import React, { useContext, useRef, useState } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import path from "../utils/path"
import { AuthContext } from "../context/AuthContext"
import { UseAuthContext } from "../hooks/useAuthContext"

const CustomerLogin = () => {
  const location = useLocation()
  const { bgColor, secondaryColor } = location.state

  const navigate = useNavigate()

  const username = useRef("")
  const password = useRef("")
  const {dispatch} = UseAuthContext()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (username.current.value === "" || password.current.value === "") {
      alert("please fill in all fields")
      return
    }
    try {
      const res = await axios.post(`${path}/customer/login`, {
        username: username.current.value,
        password: password.current.value,
      })
      const customerId = res.data.customer.id
      localStorage.setItem('user',JSON.stringify(res.data.customer))
      dispatch({type:"LOGIN", payload: res.data.customer})
      navigate(`/customer-dashboard/${customerId}`)
    } catch (err) {
      alert(err.response.data)
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
    margin-top: 5rem;
    min-width: 50vw;
    max-height: 40vh;
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
    margin: 1rem auto;
    color: white;
    width: 50%;
    &:hover {
      background-color: ${secondaryColor};
    }
  `

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title className="text-center text-2xl text-gray-600">customer login</Title>
        <InputContainer>
          <Label htmlFor="username">username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            ref={username}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            ref={password}
          />
        </InputContainer>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  )
}

export default CustomerLogin
