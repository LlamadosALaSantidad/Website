import type { ButtonHTMLAttributes } from "react";
import "./filter.scss"

type variant = "primary" | "secondary" | "primary-close" | "secondary-close";
type state = "selected" | "";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: variant;
    state?: state;
}

function Filter({ children, variant, state, ...props }: ButtonProps) {
    return (
        <button className={`filter ${variant} ${state}`} {...props}>
            {children}
        </button>
    );
}

export default Filter;