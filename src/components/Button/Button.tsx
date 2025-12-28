import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";
import { colors, fontSizes, spacing, shadows } from "../../styles/tokens";

export const Button = ({
  children,
  variant = "prime",
  size = "warrior",
  fullWidth = false,
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) => {
  const styleVars = {
    "--btn-bg": colors[variant],
    "--btn-color": variant === "sideswipe" ? "#020617" : "white",
    "--btn-padding": spacing[size],
    "--btn-font-size": fontSizes[size],
    "--btn-shadow": shadows[variant] || "none",
  } as React.CSSProperties;

  return (
    <button
      className={[
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
      ].join(" ")}
      style={styleVars}
      disabled={disabled || loading}
      {...props}>
      {loading ? "Loading..." : children}
    </button>
  );
};
