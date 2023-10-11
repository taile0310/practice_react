import React from "react";
import "./input.css";
import { CustomInputProps } from "../../../types/interface";

const Input = ({ placeholder }: CustomInputProps) => {
  return <input className="card-input" type="text" placeholder={placeholder} />;
};

export default Input;
