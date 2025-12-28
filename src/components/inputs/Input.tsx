import styles from "./Input.module.css";

type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  inputSize?: InputSize;
  fullWidth?: boolean;
  theme?: "light" | "dark";
}

export function Input({
  label,
  error,
  inputSize = "md",
  fullWidth = false,
  theme = "light",
  ...props
}: InputProps) {
  return (
    <div
      className={[
        styles.wrapper,
        styles[inputSize],
        fullWidth && styles.fullWidth,
        theme === "dark" ? styles.dark : styles.light,
      ].join(" ")}>
      {label && <label className={styles.label}>{label}</label>}

      <input
        className={[styles.input, error && styles.error].join(" ")}
        {...props}
      />

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
