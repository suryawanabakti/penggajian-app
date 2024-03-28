import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            {/* Tabler */}
            <link href="/dist/css/tabler.min.css?1684106062" rel="stylesheet" />

            {children}
        </>
    );
}
