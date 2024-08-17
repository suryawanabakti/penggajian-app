import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { IconCaretDown, IconPlus, IconSettings } from "@tabler/icons-react";
import FlashMessage from "@/Components/FlashMessage";
import moment from "moment";

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
            header={
                <div className="col">
                    <h2 className="page-title">Jabatan</h2>
                    <div className="text-secondary mt-1 text-sm">
                        1-{10} dari {positions.length} jabatan.
                    </div>
                </div>
            }
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
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {positions.map((data: any) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.name}</td>
                                                <td>
                                                    {moment(
                                                        data.created_at
                                                    ).format("DD/MM/YYYY")}
                                                </td>
                                                <td>
                                                    {moment(
                                                        data.updated_at
                                                    ).format("DD/MM/YYYY")}
                                                </td>
                                                <td>
                                                    <div className="btn-actions gap-2">
                                                        <Link
                                                            className="btn btn-warning btn-sm"
                                                            href={`/admin/positions/${data.id}/edit`}
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            className="btn btn-danger btn-sm"
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
