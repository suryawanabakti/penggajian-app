import React from "react";
import { Link } from "@inertiajs/react";

export default function Pagination({ links }: any) {
    function getClassName(active: boolean) {
        if (active) {
            return "page-item active";
        } else {
            return "page-item";
        }
    }

    return (
        links.length > 3 && (
            <nav aria-label="Page navigation example" className="mt-3">
                <ul className="pagination">
                    {links.map((link: any, key: any) =>
                        link.url === null ? (
                            <li className="page-item"></li>
                        ) : (
                            <li className={getClassName(link.active)}>
                                <Link className="page-link" href={link.url}>
                                    {link.label == "&laquo; Previous"
                                        ? "Previous "
                                        : link.label == "Next &raquo;"
                                        ? "Next"
                                        : link.label}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        )
    );
}
