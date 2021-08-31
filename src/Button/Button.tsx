// Generated with util/create-component.js
import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button = ({
  variant,
  label = "Button",
  disableShadow = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      data-testid="Button"
      className={`button button--${variant}`}
      {...props}
    >
      {label}
    </button>
  );
};
export default Button;
