import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import {
    IconCaretDown,
    IconPlus,
    IconRefresh,
    IconSettings,
} from "@tabler/icons-react";
import FlashMessage from "@/Components/FlashMessage";
import Pagination from "@/Components/Pagination";
import { route } from "../../../../../vendor/tightenco/ziggy/src/js";
export default function Index({ auth, employees, search }: any) {
    const { flash }: any = usePage().props;
    const { data, setData, get } = useForm({
        search: search,
    });

    const dropdown = (
        <div className="dropdown">
            <Link className="btn btn-primary" href="/admin/employees/create">
                <IconPlus className="icon" /> Tambah Pegawai
            </Link>
            <ul className="dropdown-menu">
                <li>
                    <Link
                        className="dropdown-item"
                        href="/admin/employees/create"
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
                    <h2 className="page-title">Pegawai</h2>
                    <div className="text-secondary mt-1 text-sm">
                        1-{10} dari {employees.total} pegawai.
                    </div>
                </div>
            }
            dropdown={dropdown}
        >
            <Head title="Pegawai" />

            <div className="page-body">
                <div className="container">
                    <FlashMessage flash={flash.message} />
                    <div className="card">
                        <div className="card-body border-bottom py-3">
                            <div className="d-flex">
                                <div className="text-secondary">
                                    <a
                                        href="/admin/employees"
                                        className="btn  btn-sm btn-icon"
                                    >
                                        <IconRefresh className="icon" />
                                    </a>
                                </div>
                                <div className="ms-auto text-secondary">
                                    Search:
                                    <div className="ms-2 d-inline-block">
                                        <form action="">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                aria-label="Search User"
                                                placeholder="Press Enter To Search"
                                                name="search"
                                                value={data.search}
                                                onChange={(e) =>
                                                    setData(
                                                        "search",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {employees.data.length === 0 ? (
                            <div className="text-center mt-2">
                                ⚠️ Tidak ditemukan pegawai silahkan dengan{" "}
                                <Link href="/admin/employees/create">
                                    Klik disini
                                </Link>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table table-hover card-table table-vcenter datatable">
                                    <thead>
                                        <tr>
                                            <th>Kode</th>
                                            <th>Nama</th>
                                            <th>Email</th>
                                            <th>Jabatan</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employees.data.map((data: any) => {
                                            return (
                                                <tr key={data.id}>
                                                    <td>
                                                        <Link
                                                            href={route(
                                                                "admin.employees.show",
                                                                data.id
                                                            )}
                                                        >
                                                            {data.code}
                                                        </Link>
                                                    </td>
                                                    <td>{data.user.name}</td>
                                                    <td>{data.user.email}</td>
                                                    <td>
                                                        {data.position?.name}
                                                    </td>
                                                    <td>
                                                        <div className="btn-actions gap-2">
                                                            <Link
                                                                className="btn btn-warning btn-sm"
                                                                href={`/admin/employees/${data.id}/edit`}
                                                            >
                                                                Edit
                                                            </Link>
                                                            <Link
                                                                className="btn btn-danger btn-sm"
                                                                method="delete"
                                                                href={`/admin/employees/${data.id}`}
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
                            </div>
                        )}

                        <div className="mt-3 ms-2 ">
                            <Pagination links={employees.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
