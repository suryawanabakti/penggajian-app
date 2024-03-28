import { IconHeart } from "@tabler/icons-react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-xl">
                <div className="row text-center align-items-center flex-row-reverse">
                    <div className="col-lg-auto ms-lg-auto">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="link-secondary"
                                    rel="noopener"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="link-secondary">
                                    License
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item">
                                Copyright © 2023{" "}
                                <a href="." className="link-secondary">
                                    Laravel Inertia Starter Pack
                                </a>
                                . All rights reserved.
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="#"
                                    className="link-secondary"
                                    rel="noopener"
                                >
                                    v1.0.0-beta19
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
