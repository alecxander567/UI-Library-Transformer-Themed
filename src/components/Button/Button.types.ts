export type ButtonVariant =
  | "prime"
  | "ironhide"
  | "sideswipe"
  | "mirage"
  | "bee"
  | "jazz"
  | "ratchet";

export type ButtonSize = "scout" | "warrior" | "leader";

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}
