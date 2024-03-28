import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    IconArrowDown,
    IconCaretDown,
    IconDropletDown,
} from "@tabler/icons-react";

export default function Index({ auth, users }: any) {
    const dropdown = (
        <div className="dropdown">
            <button
                className="btn btn-icon"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <IconCaretDown className="icon" />
            </button>
            <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item" href="#">
                        Action
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        Another action
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        Something else here
                    </a>
                </li>
            </ul>
        </div>
    );
    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Users"
            dropdown={dropdown}
        >
            <Head title="Users" />

            <div className="page-body">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data.map((data: any) => {
                                        return (
                                            <tr>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn dropdown-toggle"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            Aksi
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Action
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Another
                                                                    action
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Something
                                                                    else here
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
