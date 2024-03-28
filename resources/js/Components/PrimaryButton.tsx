import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `btn btn-danger w-100 ` +
                className +
                ` ${disabled && " btn-loading"}`
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
