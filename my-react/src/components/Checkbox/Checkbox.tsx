import React, {FocusEventHandler} from "react";
import {Error} from "../Errors/Error";
import {CheckboxInputStyled} from "./Checkbox.styled";

type checkboxProps = {
  label: string;
  name: string;
  className: string;
  value: boolean;
  onChange: FocusEventHandler<HTMLInputElement>;
  error: string;
};

export const Checkbox = (props: checkboxProps) => {
  return <label>
    <CheckboxInputStyled type="checkbox"
                         className={props.className}
                         onChange={props.onChange}
                         checked={props.value}
                         name={props.name}/>
    <span> {props.label}</span>
    <Error error={props.error || ""}/>
  </label>;
};