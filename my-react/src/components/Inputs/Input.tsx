import React, {FocusEventHandler} from "react";
import {Error} from "../Errors/Error";
import {StyledInputs} from "./Inputs.styled";

interface InputFieldProps {
  label: string;
  name: string;
  className: string;
  value: string;
  placeholder: string;
  onChange: FocusEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  dirty: boolean;
  error: string;
}

export const Input = (props: InputFieldProps) => {
  return <label>
    {props.label} {" "}
    <br/>
    <StyledInputs
      className={props.className}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
      placeholder={props.placeholder}
      name={props.name}/>
    <Error error={props.dirty && props.error ? props.error : ""}/>
  </label>;
};