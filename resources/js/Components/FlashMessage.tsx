import React, { useEffect, useState } from "react";

export default function FlashMessage({ flash }: any) {
    const [message, setMessage] = useState(flash);
    console.log("component", message);
    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage(null);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);
    return (
        message && (
            <div className={`alert alert-${message.status}`} role="alert">
                <strong>{message.message}</strong>. {message.data?.name}
            </div>
        )
    );
}
