import { HTMLAttributes } from "react";

export default function InputError({
    message,
    className = "",
    ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <small {...props} className={"text-sm text-danger " + className}>
            {message}
        </small>
    ) : null;
}
