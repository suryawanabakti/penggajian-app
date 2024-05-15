import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import {
    IconCash,
    IconFileSpreadsheet,
    IconHome,
    IconMedal,
    IconSearch,
    IconUsers,
} from "@tabler/icons-react";
import { FormEventHandler } from "react";
import { route } from "../../../../vendor/tightenco/ziggy/src/js";
export default function SecondNavbar({
    user,
    showCollapseSecondNavbar,
}: {
    user: any;
    showCollapseSecondNavbar: boolean;
}) {
    let links;
    if (user.roles[0].name == "admin") {
        links = (
            <>
                <li
                    className={`nav-item ${
                        route().current("admin.positions*") ? "active" : ""
                    }`}
                >
                    <Link className="nav-link" href="/admin/positions">
                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                            <IconMedal
                                className="icon"
                                size={24}
                                strokeWidth={2}
                            />
                        </span>
                        <span className="nav-link-title">Jabatan</span>
                    </Link>
                </li>
                <li
                    className={`nav-item ${
                        route().current("admin.employees*") ? "active" : ""
                    }`}
                >
                    <Link className="nav-link" href="/admin/employees">
                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                            <IconUsers
                                className="icon"
                                size={24}
                                strokeWidth={2}
                            />
                        </span>
                        <span className="nav-link-title">Pegawai</span>
                    </Link>
                </li>
                <li
                    className={`nav-item ${
                        route().current("admin.salaries*") ? "active" : ""
                    }`}
                >
                    <Link className="nav-link" href="/admin/salaries">
                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                            <IconCash
                                className="icon"
                                size={24}
                                strokeWidth={2}
                            />
                        </span>
                        <span className="nav-link-title">Penggajian</span>
                    </Link>
                </li>
                <li
                    className={`nav-item ${
                        route().current("admin.reports*") ? "active" : ""
                    }`}
                >
                    <Link className="nav-link" href="/admin/reports">
                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                            <IconFileSpreadsheet
                                className="icon"
                                size={24}
                                strokeWidth={2}
                            />
                        </span>
                        <span className="nav-link-title">Laporan</span>
                    </Link>
                </li>
            </>
        );
    }
    const { data, setData, get, processing } = useForm({
        search: "",
    });

    const handleSearch: FormEventHandler = (e) => {
        e.preventDefault();
        get("/admin/dashboard");
    };
    return (
        <header
            className="navbar-expand-md"
            style={
                showCollapseSecondNavbar
                    ? { display: "block" }
                    : { display: "none" }
            }
        >
            <div className="navbar-collapse" id="navbar-menu">
                <div className="navbar">
                    <div className="container-xl">
                        <ul className="navbar-nav">
                            <li
                                className={`nav-item ${
                                    route().current("*dashboard")
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <Link className="nav-link" href="/dashboard">
                                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                                        <IconHome
                                            className="icon"
                                            size={24}
                                            strokeWidth={2}
                                        />
                                    </span>
                                    <span className="nav-link-title">Home</span>
                                </Link>
                            </li>
                            {links}
                        </ul>
                        <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                            <form onSubmit={handleSearch} autoComplete="off">
                                <div className="input-icon">
                                    <span className="input-icon-addon">
                                        <IconSearch
                                            className={`icon ${
                                                processing && "spinner-border"
                                            }`}
                                            size={24}
                                            strokeWidth={2}
                                        />
                                    </span>
                                    <TextInput
                                        placeholder="Search…"
                                        value={data.search}
                                        onChange={(e) =>
                                            setData("search", e.target.value)
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
