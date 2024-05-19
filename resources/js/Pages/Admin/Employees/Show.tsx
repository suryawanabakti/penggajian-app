import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { IconDownload, IconMinus, IconPlus } from "@tabler/icons-react";
const numberFormat = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(num);
};

export default function Show({ auth, employee, salaries }: any) {
    const [show, setShow] = useState(false);
    const dropdown = <Link href="/admin/employees">Kembali</Link>;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={`Detail`}
            dropdown={dropdown}
        >
            <Head title={employee.user.name} />
            <div className="page-body">
                <div className="container">
                    <div className="card">
                        <div className="card-body d-flex justify-content-between">
                            <b>Detail Pegawai</b>
                            <button
                                className="btn btn-icon btn-primary btn-sm"
                                onClick={() => setShow(!show)}
                            >
                                {show ? (
                                    <IconMinus className="icon" />
                                ) : (
                                    <IconPlus className="icon" />
                                )}
                            </button>
                        </div>
                        <table
                            className={`table card-table table-bordered table-hover table-striped ${
                                show ? "" : "collapse"
                            }`}
                        >
                            <thead>
                                <tr>
                                    <th>Kode</th>
                                    <td>{employee.code}</td>
                                </tr>
                                <tr>
                                    <th>Nama</th>
                                    <td>{employee.user.name}</td>
                                </tr>
                                <tr>
                                    <th>Jabatan</th>
                                    <td>{employee.position.name}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body d-flex justify-content-between">
                            <b>Daftar Gaji</b>
                        </div>
                        <div className="table-responsive">
                            <table
                                className={`table card-table table-bordered table-hover table-striped`}
                            >
                                <thead>
                                    <tr>
                                        <th
                                            style={{
                                                position: "sticky",
                                                left: 0,
                                            }}
                                        >
                                            Bulan/Tahun
                                        </th>

                                        <th>Gaji Pokok</th>
                                        <th>Tunj.Jabatan</th>
                                        <th>Tunj.Keluarga</th>
                                        <th>Tunj.Khusus</th>
                                        <th>Tunj.Lembur dan Makan</th>
                                        <th>Tunj.Kelebihan Mengajar</th>
                                        <th>Tunj.Kesra</th>
                                        <th>Pot.PPH21</th>
                                        <th>Pot.Pinjaman Koperasi</th>
                                        <th>Pot.Sumbangan KYY</th>
                                        <th>Pot.Simpanan Wajib</th>
                                        <th>Pot.BPJS</th>
                                        <th>Pot.Arisan</th>
                                        <th>Pot.DLL</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {salaries.map((data: any) => {
                                        return (
                                            <tr key={data.id}>
                                                <td
                                                    className="text-nowrap"
                                                    style={{
                                                        position: "sticky",
                                                        left: 0,
                                                        backgroundColor: "#fff",
                                                    }}
                                                >
                                                    {data.tanggal}{" "}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.gaji_pokok
                                                    )}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.tunjangan_jabatan
                                                    )}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.tunjangan_keluarga
                                                    )}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.tunjangan_khusus
                                                    )}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.tunjangan_lembur_dan_makan
                                                    )}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.tunjangan_kelebihan_mengajar
                                                    )}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.tunjangan_kesra
                                                    )}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.potongan_pph21
                                                    )}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.potongan_pinjaman_koperasi
                                                    )}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.potongan_sumbangan_kyy
                                                    )}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.potongan_simpanan_wajib
                                                    )}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.potongan_bpjs_kesehatan_dan_tenagakerjaan
                                                    )}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.potongan_arisan
                                                    )}
                                                </td>
                                                <td>
                                                    {numberFormat(
                                                        data.potongan_dll
                                                    )}
                                                </td>
                                                <td className="text-nowrap">
                                                    {numberFormat(data.total)}
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
