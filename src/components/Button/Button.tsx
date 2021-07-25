import React from "react";
import styles from "./Button.module.scss";

type Variant = "started" | "finish";

type VariantInfo = {
  variant: Variant;
  label: string;
};

const ButtonVariantsMapping: Record<Variant, VariantInfo> = {
  started: { label: "Start Request", variant: "started" },
  finish: { label: "Finish Request", variant: "finish" },
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  onClick: any;
  loading?: any;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  loading,
  ...rest
}) => {
  const button = ButtonVariantsMapping[variant];

  return (
    <button className={styles[button.variant]} onClick={onClick} {...rest}>
      {loading ? "Loading..." : button.label}
    </button>
  );
};

export default Button;
