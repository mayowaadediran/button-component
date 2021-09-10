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
  const btnDisabled = disabled ? `button--disabled` : ``;
  return (
    <button
      data-testid="Button"
      className={`button button--${variant} ${btnDisabled}`}
      {...props}
    >
      {label}
    </button>
  );
};
export default Button;
