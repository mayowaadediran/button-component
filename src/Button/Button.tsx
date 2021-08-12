// Generated with util/create-component.js
import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button = ({ variant, label } : ButtonProps) => (
    <button data-testid="Button" className="button">{label}</button>
);

export default Button;

