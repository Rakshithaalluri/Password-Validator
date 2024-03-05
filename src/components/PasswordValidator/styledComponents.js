// Style your elements here
import styled from 'styled-components'

export const MainPasswordContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PasswordValidatorContainer = styled.div`
  background-color: #383a4e;
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  border-radius: 10px;
`

export const PasswordHeading = styled.h1`
  font-size: 40px;
  color: #f8fafc;
  font-weight: 400;
  font-family: 'Roboto';
  margin-bottom: 10px;
`

export const CheckingText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 40px;
`

export const InputElement = styled.input`
  background-color: #edeeff;
  border: none;
  outline: none;
  height: 30px;
  width: 60%;
`

export const ErrorText = styled.p`
  color: #ef4444;
  font-size: 10px;
  font-weight: 400;
`
