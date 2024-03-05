// Write your code here
import {useState} from 'react'

import {
  MainPasswordContainer,
  PasswordValidatorContainer,
  PasswordHeading,
  CheckingText,
  InputElement,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [currentPassword, changePassword] = useState('')
  const showMessage = currentPassword.length < 8

  const onChangePassword = event => {
    changePassword(event.target.value)
  }

  return (
    <MainPasswordContainer>
      <PasswordValidatorContainer>
        <PasswordHeading>Password Validator</PasswordHeading>
        <CheckingText>
          Check how strong and secure is your password
        </CheckingText>
        <InputElement type="password" onChange={onChangePassword} />
        {showMessage && (
          <ErrorText> Your password must be at least 8 characters </ErrorText>
        )}
      </PasswordValidatorContainer>
    </MainPasswordContainer>
  )
}

export default PasswordValidator
