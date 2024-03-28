import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { User } from "@/types";
import FirstNavbar from "@/Partials/Auth/FirstNavbar";
import SecondNavbar from "@/Partials/Auth/SecondNavbar";
import Footer from "@/Partials/Auth/Footer";
import LinkHead from "@/Partials/Auth/LinkHead";
import ScriptBody from "@/Partials/Auth/ScriptBody";
import { Link, usePage } from "@inertiajs/react";
import toast, { Toaster } from "react-hot-toast";
import {
    IconBoxAlignBottom,
    IconCaretDown,
    IconDropletDown,
} from "@tabler/icons-react";

export default function Authenticated({
    user,
    header,
    dropdown,
    children,
    link,
}: PropsWithChildren<{
    user: User;
    header?: ReactNode;
    dropdown?: any;
    link?: string;
}>) {
    const [showCollapseSecondNavbar, setCollapseSecondNavbar] = useState(true);
    const { flash }: any = usePage().props;

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 600) {
                setCollapseSecondNavbar(true);
            } else {
                setCollapseSecondNavbar(false);
            }
        });
        if (flash?.message) {
            toast.success(flash.message.message);
        } else {
            toast.dismiss();
        }
    }, [flash, window]);
    return (
        <>
            <LinkHead />
            <div className="page">
                <Toaster />
                {/* Navbar */}
                <FirstNavbar
                    user={user}
                    showCollapseSecondNavbar={showCollapseSecondNavbar}
                    setCollapseSecondNavbar={setCollapseSecondNavbar}
                />
                <SecondNavbar
                    user={user}
                    showCollapseSecondNavbar={showCollapseSecondNavbar}
                />
                <div className="page-wrapper">
                    {/* Page body */}

                    {header && (
                        <div className="page-header d-print-none">
                            <div className="container-xl">
                                <div className="row g-2 align-items-center">
                                    <div className="col d-flex justify-content-between">
                                        <h2 className="page-title">{header}</h2>
                                        {dropdown}
                                    </div>

                                    {link && (
                                        <div className="col-auto">
                                            <Link href={link}>Kembali</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {children}
                    <Footer />
                </div>
            </div>

            <ScriptBody />
        </>
    );
}
