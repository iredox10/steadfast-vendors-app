import styled from "styled-components"
import axios from "axios"
import path from "../utils/path"
import Header from "./Header"
import {
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa"
import { useRef, useState } from "react"
const Contact = ({
  id,
  contactEmail,
  contactAddress,
  contactNumber,
  primaryColor,
  secondaryColor,
  tertiaryColor,
}) => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 80%;
    margin: 3rem auto;
    gap: 3rem;
    @media (max-width: 800px) {
      flex-direction: column;
    }
  `
  const Contacts = styled.div`
    display: flex;
    flex-direction: column;
  `
  const Form = styled.form`
    box-shadow: 3px 10px 10px 5px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  `
  const Label = styled.label`
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  `
  const Input = styled.input`
    border: 2px solid ${primaryColor};
    padding: 1rem;
    /* outline: 1px solid ${secondaryColor}; */
    width: 100%;
  `

  const FormBtn = styled.button`
    background: ${primaryColor};
    padding: 0.5rem 1rem;
    color: white;
    width: 100%;
  `
  const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  `
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    box-shadow: 3px 10px 10px 5px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    width: 100%;
  `

  const Circle = styled.div`
    border: 2px dashed ${primaryColor};
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  `
  const Flex = styled.div`
    display: flex;
    align-content: center;
    gap: 3rem;
  `
  const Text = styled.p`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    color: ${primaryColor};
  `
  const Span = styled.span`
    text-align: center;
    letter-spacing: 0.2rem;
    text-transform: capitalize;
    font-weight: bold;
  `

  const Textarea = styled.textarea`
    border: 2px solid ${primaryColor};
    padding: 2rem 1rem;
  `
  const P = styled.p`
    text-align: center;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
  `
  const nameRef = useRef("")
  const emailRef = useRef("")
  const subjectRef = useRef("")
  const messageRef = useRef("")
  const errorRef = useRef("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      subjectRef.current.value === "" ||
      messageRef.current.value === ""
    ) {
      alert("Please fill all the fields")
      return
    }
    try {
      const res = await axios.post(`${path}/feedback/send-feedback/${id}`, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        subject: subjectRef.current.value,
        message: messageRef.current.value,
      })
      if (res.status === 201) {
        alert("Message sent successfully")
        nameRef.current.value = ""
        emailRef.current.value = ""
        subjectRef.current.value = ""
        messageRef.current.value = ""
        console.log(res.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Header
        text="Contact"
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        tertiaryColor={tertiaryColor}
      />

      <Wrapper>
        <Contacts>
          <Container>
            <Div>
              <Circle>
                <Text>
                  <FaLocationArrow />
                </Text>
              </Circle>
              <Span>Address</Span>
              <P>{contactAddress ? contactAddress : "contact address"}</P>
            </Div>
            <Flex>
              <Div>
                <Circle>
                  <Text>
                    <FaEnvelope />
                  </Text>
                </Circle>
                <Span>Email:</Span>
                <P>{contactEmail ? contactEmail : "contact email"}</P>
              </Div>
              <Div>
                <Circle>
                  <Text>
                    <FaPhone />
                  </Text>
                </Circle>
                <Span>Phone Number</Span>
                <P>{contactNumber ? contactNumber : "phone number"}</P>
              </Div>
            </Flex>
          </Container>
        </Contacts>
        <Form onSubmit={handleSubmit}>
          {errorRef && <p>{errorRef.current.value}</p>}
          <Flex>
            <FormDiv>
              <Label>name</Label>
              <Input
                type="text"
                placeholder="Your Name..."
                // onChange={(e) => nameRef.current.value =e.target.value}
                ref={nameRef}
              />
            </FormDiv>
            <FormDiv>
              <Label>Your Email</Label>
              <Input
                type="email"
                placeholder="Your Email..."
                ref={emailRef}
              />
            </FormDiv>
          </Flex>
          <FormDiv>
            <Label>subject</Label>
            <Input
              type="text"
              ref={subjectRef}
              placeholder="Subject..."
            />
          </FormDiv>
          <FormDiv>
            <Label>Message</Label>
            <Textarea ref={messageRef}></Textarea>
          </FormDiv>
          <FormBtn type="submit">Send</FormBtn>
        </Form>
      </Wrapper>
    </>
  )
}
export default Contact
