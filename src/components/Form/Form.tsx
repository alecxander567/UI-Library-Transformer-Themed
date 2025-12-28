import styles from "./Form.module.css";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  spacing?: "sm" | "md" | "lg";
}

export function Form({ spacing = "md", children, ...props }: FormProps) {
  return (
    <form className={`${styles.form} ${styles[spacing]}`} {...props}>
      {children}
    </form>
  );
}
