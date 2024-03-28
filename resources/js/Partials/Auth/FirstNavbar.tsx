import { Link } from "@inertiajs/react";
import { PropsWithChildren, useState } from "react";
import { IconBell } from "@tabler/icons-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
export default function FirstNavbar({
    user,
    showCollapseSecondNavbar,
    setCollapseSecondNavbar,
}: any) {
    return (
        <header className="navbar  navbar-expand-md d-print-none">
            <div className="container-xl">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-target="#navbar-menu"
                    aria-expanded={showCollapseSecondNavbar}
                    aria-label="Toggle navigation"
                    onClick={() =>
                        setCollapseSecondNavbar(!showCollapseSecondNavbar)
                    }
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    <Link href="/dashboard">
                        <div className="d-flex justify-content-between">
                            <ApplicationLogo width="30" />{" "}
                            <span className="mt-1 fw-bold ml-2">UNITAMA</span>
                        </div>
                    </Link>
                </h1>
                <div className="navbar-nav flex-row order-md-last">
                    <div className="nav-item d-none d-md-flex me-3">
                        <div className="btn-list"></div>
                    </div>
                    <div className="d-none d-md-flex">
                        <div className="nav-item dropdown d-none d-md-flex me-3">
                            <a
                                href="#"
                                className="nav-link px-0"
                                data-bs-toggle="dropdown"
                                tabIndex={-1}
                                aria-label="Show notifications"
                            >
                                {/* Download SVG icon from http://tabler-icons.io/i/bell */}
                                <IconBell className="icon" />
                                {user.unread_notifications.length > 0 && (
                                    <sup className="status-dot status-dot-animated bg-red" />
                                )}
                            </a>
                            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title d-flex justify-content-between w-80">
                                            Notifications
                                            <Link
                                                href="/notifications/mark-all-as-read"
                                                method="post"
                                                as="button"
                                                className="text-primary"
                                            >
                                                <small>Mark All As Read</small>
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="list-group list-group-flush list-group-hoverable">
                                        {user.limitnotification.map(
                                            (data: any) => {
                                                return (
                                                    <Link
                                                        key={data.id}
                                                        href={`/notifications/${data.id}`}
                                                        className="text-decoration-none"
                                                    >
                                                        <div className="list-group-item">
                                                            <div className="row align-items-center">
                                                                <div className="col-auto">
                                                                    {!data.read_at ? (
                                                                        <span className="status-dot status-dot-animated bg-red d-block" />
                                                                    ) : (
                                                                        <span className="status-dot d-block" />
                                                                    )}
                                                                </div>
                                                                <div className="col text-truncate">
                                                                    {/* <a
                                                                    href="#text"
                                                                    className="text-body d-block"
                                                                ></a> */}
                                                                    <div className="d-block text-muted text-truncate mt-n1">
                                                                        {
                                                                            data
                                                                                .data
                                                                                .data
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                );
                                            }
                                        )}
                                        {user.limitnotification.length ===
                                            5 && (
                                            <Link
                                                href={`/notifications`}
                                                className="text-decoration-none"
                                            >
                                                <div className="list-group-item text-center">
                                                    <div className="row align-items-center">
                                                        <div className="col text-truncate">
                                                            {/* <a
                                                                    href="#text"
                                                                    className="text-body d-block"
                                                                ></a> */}
                                                            <div className="d-block text-muted text-truncate mt-n1">
                                                                Show All
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a
                            href="#profile"
                            className="nav-link d-flex lh-1 text-reset p-0"
                            data-bs-toggle="dropdown"
                            aria-label="Open user menu"
                        >
                            <span
                                className="avatar avatar-sm"
                                style={{
                                    backgroundImage: `url(https://ui-avatars.com/api/?name=${user.name})`,
                                }}
                            />
                            <div className="d-none d-xl-block ps-2">
                                <div>{user.name}</div>
                                <div className="mt-1 small text-muted text-capitalize">
                                    {user.roles[0].name}
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <Link
                                href="/notifications"
                                className="dropdown-item"
                            >
                                Notifications
                            </Link>
                            <Link href="/activities" className="dropdown-item">
                                Activities
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link href="/profile" className="dropdown-item">
                                Settings
                            </Link>
                            <Link
                                href="/logout"
                                method="post"
                                className="dropdown-item"
                                as="button"
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
