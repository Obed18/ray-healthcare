import React from "react";
import { Slot } from "@radix-ui/react-slot";
import "../styles/Button.css";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const classes = ["btn-base", `btn-${variant}`, `btn-${size}`, className]
      .filter(Boolean)
      .join(" ");

    return <Comp className={classes} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export default Button;