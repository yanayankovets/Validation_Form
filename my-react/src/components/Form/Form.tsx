import React from "react";
import {useState} from "react";
import {Input} from "../Inputs/Input";
import {Checkbox} from "../Checkbox/Checkbox";
import {StyledForm} from "./Form.styled";
import {StyledResetButton, StyledSubmitButton} from "../Buttons/Buttons.styled";


export const Form = () => {
const [fullName, setFullName] = useState("");
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [acceptTerms, setAcceptTerms] = useState(false);

const [fullNameError, setFullNameError] = useState("Full name is required");
const [userNameError, setUserNameError] = useState("User name is required");
const [emailError, setEmailError] = useState("Email is required");
const [passwordError, setPasswordError] = useState("Password is required");
const [confirmPasswordError, setConfirmPasswordError] = useState("To confirm password is required");
const [acceptTermsError, setAcceptTermsError] = useState("")

const [fullNameDirty, setFullNameDirty] = useState(false);
const [userNameDirty, setUserNameDirty] = useState(false);
const [emailDirty, setEmailDirty] = useState(false);
const [passwordDirty, setPasswordDirty] = useState(false);
const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);


const onChangeFullName = (event: any) => {
  if (event.target.value.length < 6) {
    setFullNameError("You entered less than 6 characters");
  }
  if (event.target.value.length >= 25) {
    setFullNameError("You entered more than 25 characters");
  }
  if (event.target.value.length >= 6 && event.target.value.length <= 25) {
    setFullNameError("");
  }
  if (!event.target.value.trim().includes(' ')) {
    setFullNameError("Full name must contain a space");
  }
  if (event.target.value.trim() === '') {
    setFullNameError("Full name is required");
  }
  setFullName(event.target.value);
};

const onChangeUserName = (event: any) => {
  if (event.target.value.trim() !== "") {
    setUserNameError("");
  } else {
    setUserNameError("Username is required");
  }
  setUserName(event.target.value);
};

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const onChangeEmail = (event: any) => {
  if (event.target.value.match(mailFormat)) {
    setEmailError("");
  } else {
    setEmailError("Email is invalid");
  }
  setEmail(event.target.value);
};

const passwordFormat = /^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/;

const onChangePassword = (event: any) => {
  if (event.target.value.match(passwordFormat)) {
    setPasswordError("");
  } else {
    setPasswordError("Password must contain at least 8 characters and have one uppercase and one lowercase letter");
  }
  setPassword(event.target.value);
};

const onChangeConfirmPassword = (event: any) => {
  if (event.target.value.match(passwordFormat)) {
    setConfirmPasswordError("");
  } else {
    setConfirmPasswordError("To confirm password is required");
  }
  setConfirmPassword(event.target.value);
};

const handleChangeCheckbox = () => {
  setAcceptTerms(!acceptTerms);
  if (!acceptTerms) {
    setAcceptTermsError("");
  } else {
    setAcceptTermsError("Accept terms is required");
  }
};

const onSubmit = (event: any) => {
  event.preventDefault()
  if (userNameError || fullNameError || emailError || passwordError || acceptTermsError) {
    return
  }
  if (!acceptTerms) {
    setAcceptTermsError("Accept terms is required")
    return
  }
  if (password !== confirmPassword) {
    setConfirmPasswordError("Password does not match")
    return
  }
  return alert("You have successfully signed up!")
};

const onReset = (event: any) => {
  setFullName('');
  setUserName('');
  setEmail('');
  setPassword('');
  setConfirmPassword('');
  setAcceptTerms(false);
  setFullNameError('');
  setUserNameError('');
  setEmailError('');
  setPasswordError('');
  setConfirmPasswordError('');
  setAcceptTermsError('')
};

const handleBlur = (event: any) => {
  switch (event.target.name) {
    case "fullName":
      setFullNameDirty(true);
      break;
    case "userName":
      setUserNameDirty(true);
      break;
    case "password":
      setPasswordDirty(true);
      break;
    case "email":
      setEmailDirty(true);
      break;
    case "confirmPassword":
      setConfirmPasswordDirty(true);
      break;
  }
};

return (
  <StyledForm>
    <Input label="Full name"
           name="fullName"
           value={fullName}
           onChange={onChangeFullName}
           className={fullNameDirty && fullNameError ? "error" : ""}
           onBlur={handleBlur}
           placeholder="Enter full name..."
           dirty={fullNameDirty}
           error={fullNameError}/>
    <Input label="Username"
           name="userName"
           value={userName}
           onChange={onChangeUserName}
           className={userNameDirty && userNameError ? "error" : ""}
           onBlur={handleBlur}
           placeholder="Enter username..."
           dirty={userNameDirty}
           error={userNameError}/>
    <Input label="Email"
           name="email"
           value={email}
           onChange={onChangeEmail}
           className={emailDirty && emailError ? "error" : ""}
           onBlur={handleBlur}
           placeholder="Enter email..."
           dirty={emailDirty}
           error={emailError}/>
    <Input label="Password"
           name="password"
           value={password}
           onChange={onChangePassword}
           className={passwordDirty && passwordError ? "error" : ""}
           onBlur={handleBlur}
           placeholder="Enter password..."
           dirty={passwordDirty}
           error={passwordError}/>
    <Input label="Confirm password"
           name="confirmPassword"
           value={confirmPassword}
           onChange={onChangeConfirmPassword}
           className={confirmPasswordDirty && confirmPasswordError ? "error" : ""}
           onBlur={handleBlur}
           placeholder="Confirm password..."
           dirty={confirmPasswordDirty}
           error={confirmPasswordError}/>
    <Checkbox label="I've read and I agree to the Terms" name="accept" className={acceptTermsError ? "error" : ""}
              value={acceptTerms} onChange={handleChangeCheckbox} error={acceptTermsError}/>
    <div>
      <StyledSubmitButton type="submit" onClick={onSubmit}>
        Register
      </StyledSubmitButton>
      <StyledResetButton type="reset" onClick={onReset}>
        Reset
      </StyledResetButton>
    </div>
  </StyledForm>
)

}