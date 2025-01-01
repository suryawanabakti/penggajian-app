import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import {
    IconDotsVertical,
    IconDownload,
    IconFileTypeXls,
    IconMenu,
    IconMinus,
    IconPlus,
    IconRefresh,
    IconSend,
} from "@tabler/icons-react";
import FlashMessage from "@/Components/FlashMessage";
import { FormEventHandler, useState } from "react";

export default function Show({
    auth,
    month,
    year,
    totalSalary,
    salaries,
}: any) {
    const { post, data, setData } = useForm({
        search: "",
    });
    const { flash }: any = usePage().props;
    const [show, setShow] = useState(true);
    const handleExport = (id: number) => {
        window.location.href = `/admin/reports/${id}/export`;
    };
    const numberFormat = (num: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(num);
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={`Laporan`}
            dropdown={<Link href="/admin/reports">Kembali</Link>}
        >
            <Head title="Laporan" />

            <div className="page-body">
                <div className="container">
                    <FlashMessage flash={flash.message} />
                    <div className="card mb-5">
                        <div className="card-body d-flex justify-between">
                            <b>Detail</b>
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
                            <tbody>
                                <tr>
                                    <th>Bulan</th>
                                    <td>{month}</td>
                                </tr>
                                <tr>
                                    <th>Tahun</th>
                                    <td>{year}</td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td>{numberFormat(totalSalary)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card">
                        <div className="card-body border-bottom py-3">
                            <div className="d-flex">
                                <b className="me-2">
                                    Laporan {month} / {year}
                                </b>
                                <div className="text-secondary"></div>
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
                                            <input
                                                type="hidden"
                                                name="bulan"
                                                value={month}
                                            />
                                            <input
                                                type="hidden"
                                                name="tahun"
                                                value={year}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="card-table table table-hover">
                                <thead>
                                    <tr>
                                        <th
                                            style={{
                                                position: "sticky",
                                                left: 0,
                                            }}
                                        >
                                            Karyawan
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
                                                    {data.employee.user.name}{" "}
                                                    <br />
                                                    {
                                                        data.employee.position
                                                            ?.name
                                                    }
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
                                                        data.gaji_pokok *
                                                            (data.tunjangan_keluarga /
                                                                100)
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
                                                <td>
                                                    {numberFormat(data.total)}
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleExport(
                                                                data.id
                                                            )
                                                        }
                                                        className="btn btn-icon btn-sm"
                                                    >
                                                        <IconDownload className="icon" />
                                                    </button>
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
