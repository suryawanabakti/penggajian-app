import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { IconCaretDown, IconPlus, IconSettings } from "@tabler/icons-react";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, positions }: any) {
    const { flash }: any = usePage().props;

    const dropdown = (
        <div className="dropdown">
            <Link href="/admin/positions/create" className="btn btn-primary">
                <IconPlus className="icon" />
                Tambah Jabatan
            </Link>
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
                        <div className="card-body"></div>
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {positions.map((data: any) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.name}</td>
                                                <td>
                                                    <div className="btn-actions gap-2">
                                                        <Link
                                                            className="btn btn-warning"
                                                            href={`/admin/positions/${data.id}/edit`}
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            className="btn btn-danger"
                                                            method="delete"
                                                            href={`/admin/positions/${data.id}`}
                                                        >
                                                            Delete
                                                        </Link>
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
        </AuthenticatedLayout>
    );
}
