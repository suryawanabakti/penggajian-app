import { TypePasswordToggle } from "@/types";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { FormEventHandler, useState } from "react";

export default function PasswordToggle({
    setShowPassword,
    showPassword,
}: TypePasswordToggle) {
    const [toggle, setToggle] = useState(false);
    const handleClick: FormEventHandler = (e) => {
        e.preventDefault();
        setToggle(!toggle);
        setShowPassword(!showPassword);
    };
    return (
        <a
            onClick={handleClick}
            href="#toggle-password"
            className="link-secondary"
            title="Show password"
        >
            {!toggle ? (
                <IconEyeOff size={20} stroke={1} />
            ) : (
                <IconEye size={20} stroke={1} />
            )}
        </a>
    );
}
