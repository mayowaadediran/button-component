// Generated with util/create-component.js
export interface ButtonProps {
  variant?: "outline" | "text";
  /**
   * Button contents
   */
  label?: string;

  disableShadow?: boolean;

  disabled?: boolean;

  startIcon?: JSX.Element;

  endIcon?: JSX.Element;

  size?: "sm" | "md" | "lg";

  color?: "default" | "primary" | "secondary" | "danger";

  onClick?: () => void;
}
