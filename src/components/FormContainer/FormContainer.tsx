import React, { isValidElement, cloneElement } from "react";
import type { ReactNode } from "react";
import { Input } from "../inputs/Input";
import type { InputProps } from "../inputs/Input";

import styles from "./FormContainer.module.css";

interface FormContainerProps {
  children: ReactNode;
  variant?: "default" | "card" | "panel" | "shadowed";
  theme?: "light" | "dark";
  fullWidth?: boolean;
  height?: string | number;
}

export function FormContainer({
  children,
  variant = "default",
  theme = "light",
  fullWidth = false,
  height,
}: FormContainerProps) {
  const style: React.CSSProperties = { height };

  const themedChildren = React.Children.map(children, (child) => {
    if (isValidElement<InputProps>(child) && child.type === Input) {
      return cloneElement<InputProps>(child, { theme });
    }
    return child;
  });

  return (
    <div
      className={[
        styles.container,
        styles[variant],
        styles[theme],
        fullWidth && styles.fullWidth,
      ].join(" ")}
      style={style}>
      {themedChildren}
    </div>
  );
}
