import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { IconCaretDown, IconSettings } from "@tabler/icons-react";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, positions }: any) {
    const { flash }: any = usePage().props;

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
                    <Link
                        className="dropdown-item"
                        href="/admin/positions/create"
                    >
                        Tambah
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" href="#export">
                        Export
                    </Link>
                </li>
            </ul>
        </div>
    );
    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Jabatan"
            dropdown={dropdown}
        >
            <Head title="Jabatan" />

            <div className="page-body">
                <div className="container">
                    <FlashMessage flash={flash.message} />
                    <div className="card">
                        <div className="card-body">
                            {positions.length === 0 ? (
                                <div>
                                    ⚠️ Belum ada pegawai silahkan tambah pegawai{" "}
                                    <Link href="/admin/positions/create">
                                        Klik disini
                                    </Link>
                                </div>
                            ) : (
                                <table className="table card-table table-vcenter  datatable">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {positions.map((data: any) => {
                                            return (
                                                <tr key={data.id}>
                                                    <td>{data.name}</td>
                                                    <td>
                                                        <div className="dropdown">
                                                            <button
                                                                className=""
                                                                type="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <IconSettings className="icon" />
                                                            </button>
                                                            <ul className="dropdown-menu">
                                                                <li>
                                                                    <Link
                                                                        className="dropdown-item"
                                                                        href={`/admin/positions/${data.id}/edit`}
                                                                    >
                                                                        Edit
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        className="dropdown-item"
                                                                        method="delete"
                                                                        href={`/admin/positions/${data.id}`}
                                                                    >
                                                                        Delete
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
