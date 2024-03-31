import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import {
    IconEye,
    IconEyeOff,
    IconMenu,
    IconMenu2,
    IconMinus,
    IconPlug,
    IconPlus,
    IconSend,
    IconSettings,
} from "@tabler/icons-react";
import FlashMessage from "@/Components/FlashMessage";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

export default function Index({
    auth,
    employee,
    salary,
    dateOfSalary,
    monthOfSalary,
}: any) {
    const { flash }: any = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        gaji_pokok: salary?.gaji_pokok,
        tunjangan_jabatan: salary?.tunjangan_jabatan,
        tunjangan_keluarga: salary?.tunjangan_keluarga,
        tunjangan_khusus: salary?.tunjangan_khusus,
        tunjangan_lembur_dan_makan: salary?.tunjangan_lembur_dan_makan,
        tunjangan_kelebihan_mengajar: salary?.tunjangan_kelebihan_mengajar,
        tunjangan_kesra: salary?.tunjangan_kesra,
        potongan_pph21: salary?.potongan_pph21,
        potongan_pinjaman_koperasi: salary?.potongan_pinjaman_koperasi,
        potongan_sumbangan_kyy: salary?.potongan_sumbangan_kyy,
        potongan_simpanan_wajib: salary?.potongan_simpanan_wajib,
        potongan_bpjs_kesehatan_dan_tenagakerjaan:
            salary?.potongan_bpjs_kesehatan_dan_tenagakerjaan,
        potongan_arisan: salary?.potongan_arisan,
        potongan_dll: salary?.potongan_dll,
        tunjangan: salary?.tunjangan,
        potongan: salary?.potongan,
        total: salary?.total,
    });
    const [show, setShow] = useState(true);
    const dropdown = <Link href="/admin/salaries">Kembali</Link>;
    const handleChange = (e: any) => {
        let text = e.target.value;
        let result = text.replaceAll(",", "");
        setData(e.target.name, result);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        post(
            `/admin/salaries/employee/${employee.id}/date-of-salary/${dateOfSalary}`
        );
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={`${employee.user.name} - ${monthOfSalary}`}
            dropdown={dropdown}
        >
            <Head title="Penggajian" />

            <div className="page-body">
                <div className="container">
                    <FlashMessage flash={flash.message} />
                    <div className="card">
                        <div className="card-body d-flex justify-content-between">
                            <b>Detail Gaji</b>
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
                                    <th>Nama</th>
                                    <td>{employee.user.name}</td>
                                </tr>
                                <tr>
                                    <th>Jabatan</th>
                                    <td>{employee.position.name}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>
                                        {salary ? (
                                            <span className="text-success">
                                                Sudah
                                            </span>
                                        ) : (
                                            <span className="text-warning">
                                                Belum
                                            </span>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Bulan</th>
                                    <td>{monthOfSalary}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="card mt-5">
                        <div className="card-body d-flex justify-content-between">
                            <b>Pemberian Gaji {monthOfSalary}</b>
                            <div>
                                <div className="dropdown">
                                    <button
                                        className=""
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <IconMenu className="icon" />
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href={`#`}
                                            >
                                                Dapatkan Gaji Sebelumnya
                                            </Link>
                                        </li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label
                                        htmlFor="gaji_pokok"
                                        className="form-label"
                                    >
                                        Gaji Pokok
                                    </label>
                                    <NumericFormat
                                        name="gaji_pokok"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.gaji_pokok}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="tunjangan_jabatan"
                                        className="form-label"
                                    >
                                        Tunjangan Jabatan
                                    </label>
                                    <NumericFormat
                                        name="tunjangan_jabatan"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.tunjangan_jabatan}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="tunjangan_keluarga"
                                        className="form-label"
                                    >
                                        Tunjangan Keluarga
                                    </label>
                                    <NumericFormat
                                        id="tunjangan_keluarga"
                                        name="tunjangan_keluarga"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.tunjangan_keluarga}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="tunjangan_khusus"
                                        className="form-label"
                                    >
                                        Tunjangan Khusus
                                    </label>
                                    <NumericFormat
                                        id="tunjangan_khusus"
                                        name="tunjangan_khusus"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.tunjangan_khusus}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="tunjangan_lembur_dan_makan"
                                        className="form-label"
                                    >
                                        Tunjangan lembur & makan
                                    </label>
                                    <NumericFormat
                                        id="tunjangan_lembur_dan_makan"
                                        name="tunjangan_lembur_dan_makan"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.tunjangan_lembur_dan_makan}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="tunjangan_kelebihan_mengajar"
                                        className="form-label"
                                    >
                                        Tunjangan kelebihan mengajar
                                    </label>
                                    <NumericFormat
                                        id="tunjangan_kelebihan_mengajar"
                                        name="tunjangan_kelebihan_mengajar"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={
                                            data.tunjangan_kelebihan_mengajar
                                        }
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="tunjangan_kesra"
                                        className="form-label"
                                    >
                                        Tunjangan Kesra
                                    </label>
                                    <NumericFormat
                                        id="tunjangan_kesra"
                                        name="tunjangan_kesra"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.tunjangan_kesra}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="potongan_pph21"
                                        className="form-label"
                                    >
                                        Potongan PPH21
                                    </label>
                                    <NumericFormat
                                        id="potongan_pph21"
                                        name="potongan_pph21"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.potongan_pph21}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="potongan_pinjaman_koperasi"
                                        className="form-label"
                                    >
                                        Potongan pinjaman koperasi
                                    </label>
                                    <NumericFormat
                                        id="potongan_pinjaman_koperasi"
                                        name="potongan_pinjaman_koperasi"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.potongan_pinjaman_koperasi}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="potongan_sumbangan_kyy"
                                        className="form-label"
                                    >
                                        Potongan sumbangan KYY
                                    </label>
                                    <NumericFormat
                                        id="potongan_sumbangan_kyy"
                                        name="potongan_sumbangan_kyy"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.potongan_sumbangan_kyy}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="potongan_simpanan_wajib"
                                        className="form-label"
                                    >
                                        Potongan simpanan wajib
                                    </label>
                                    <NumericFormat
                                        id="potongan_simpanan_wajib"
                                        name="potongan_simpanan_wajib"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.potongan_simpanan_wajib}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="potongan_bpjs_kesehatan_dan_tenagakerjaan"
                                        className="form-label"
                                    >
                                        Potongan BPJS kesehatan dan
                                        tenagakerjaan
                                    </label>
                                    <NumericFormat
                                        id="potongan_bpjs_kesehatan_dan_tenagakerjaan"
                                        name="potongan_bpjs_kesehatan_dan_tenagakerjaan"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={
                                            data.potongan_bpjs_kesehatan_dan_tenagakerjaan
                                        }
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="potongan_arisan"
                                        className="form-label"
                                    >
                                        Potongan Arisan
                                    </label>
                                    <NumericFormat
                                        id="potongan_arisan"
                                        name="potongan_arisan"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.potongan_arisan}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="potongan_dll"
                                        className="form-label"
                                    >
                                        Potongan Dan Lain-lain
                                    </label>
                                    <NumericFormat
                                        id="potongan_dll"
                                        name="potongan_dll"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.potongan_dll}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button
                                    className={`btn btn-primary ${
                                        processing ? "btn-loading" : ""
                                    }`}
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
