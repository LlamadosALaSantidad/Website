import type { ButtonHTMLAttributes } from "react";
import "./button.scss"

type variant = "primary" | "secondary" | "terciary" | "white" | "error" | "ws" | "fb" | "ig";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: variant;
}

function Button({ children, variant, ...props }: ButtonProps) {
    return (
        <button className={`btn ${variant}`} {...props}>
            {children}
        </button>
    );
}

export default Button;