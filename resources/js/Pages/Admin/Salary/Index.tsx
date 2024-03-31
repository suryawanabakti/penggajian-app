import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { IconSend } from "@tabler/icons-react";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({
    auth,
    employees,
    dateOfSalary,
    month,
    year,
}: any) {
    const { flash }: any = usePage().props;

    return (
        <AuthenticatedLayout user={auth.user} header="Penggajian">
            <Head title="Penggajian" />

            <div className="page-body">
                <div className="container">
                    <FlashMessage flash={flash.message} />
                    <div className="card">
                        <div className="card-body d-flex justify-content-start">
                            <select
                                defaultValue={month}
                                className="form-control me-3"
                            >
                                <option value="1">Januari</option>
                                <option value="2">Februari</option>
                                <option value="3">Maret</option>
                                <option value="4">April</option>
                                <option value="5">Mei</option>
                                <option value="6">Juni</option>
                                <option value="7">July</option>
                                <option value="8">Agustus</option>
                                <option value="9">September</option>
                                <option value="10">Oktober</option>
                                <option value="11">November</option>
                                <option value="12">Desember</option>
                            </select>
                            <select
                                defaultValue={year}
                                className="form-control me-3"
                            >
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                            </select>
                        </div>
                        <div className="table-responsive">
                            <table className="table card-table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>Nama</th>
                                        <th>Jabatan</th>
                                        <th>Status Keterangan Gaji</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((data: any) => {
                                        return (
                                            <tr>
                                                <td>{data.nama}</td>
                                                <td>{data.jabatan}</td>
                                                <td>
                                                    {!data.salary ? (
                                                        <span className="badge bg-warning">
                                                            Belum dapat gaji
                                                            bulan ini
                                                        </span>
                                                    ) : (
                                                        <span className="badge bg-success">
                                                            Telah dapat gaji
                                                            pada tanggal{" "}
                                                            {
                                                                data.salary
                                                                    .tanggal
                                                            }
                                                        </span>
                                                    )}
                                                </td>
                                                <td>
                                                    <Link
                                                        className="btn btn-icon btn-sm"
                                                        href={`/admin/salaries/employee/${data.id}/date-of-salary/${dateOfSalary}`}
                                                    >
                                                        <IconSend className="icon" />
                                                    </Link>
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
