export type ButtonVariant =
  | "prime"
  | "ironhide"
  | "sideswipe"
  | "mirage"
  | "bee"
  | "jazz"
  | "ratchet";

export type ButtonSize = "scout" | "warrior" | "leader";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
}
