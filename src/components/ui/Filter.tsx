import type { HTMLAttributes } from "react";
import "./filter.scss"

type variant = "primary" | "secondary" | "primary-close" | "secondary-close";
type state = "selected" | "";

interface ButtonProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    variant?: variant;
    state?: state;
}

function Filter({ children, variant, state, ...props }: ButtonProps) {
    const isButton = variant !== "primary-close" && variant !== "secondary-close";
    const Tag = isButton ? 'button' : 'div';

    return (
        <Tag
            className={`filter ${variant} ${state}`}
            {...(isButton ? { type: 'button' } : {})}
            {...props}
        >
            {children}
        </Tag>
    );
}

export default Filter;