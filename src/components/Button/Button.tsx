import React from "react";
import styles from "./Button.module.scss";

type Variant = "started" | "loading" | "finish";

type VariantInfo = {
  variant: Variant;
  label: string;
};

const ButtonVariantsMapping: Record<Variant, VariantInfo> = {
  started: { label: "Start Request", variant: "started" },
  loading: { label: "Loading...", variant: "loading" },
  finish: { label: "Finish Request", variant: "finish" },
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
}

const Button: React.FC<ButtonProps> = ({ variant, ...rest }) => {
  const button = ButtonVariantsMapping[variant];

  return (
    <button className={styles[button.variant]} {...rest}>
      {button.label}
    </button>
  );
};

export default Button;
