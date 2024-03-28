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
        tunjangan: salary?.tunjangan,
        pph21: salary?.pph21,
        arisan: salary?.arisan,
        kelebihan: salary?.kelebihan,
        lembur: salary?.lembur,
        makan: salary?.makan,
        kesra: salary?.kesra,
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
                                        htmlFor="tunjangan"
                                        className="form-label"
                                    >
                                        Tunjangan
                                    </label>
                                    <NumericFormat
                                        id="tunjangan"
                                        name="tunjangan"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.tunjangan}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="pph21"
                                        className="form-label"
                                    >
                                        PPH 21
                                    </label>
                                    <NumericFormat
                                        id="pph21"
                                        name="pph21"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.pph21}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="arisan"
                                        className="form-label"
                                    >
                                        Arisan
                                    </label>
                                    <NumericFormat
                                        id="arisan"
                                        name="arisan"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.arisan}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="kelebihan"
                                        className="form-label"
                                    >
                                        Kelebihan
                                    </label>
                                    <NumericFormat
                                        id="kelebihan"
                                        name="kelebihan"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.kelebihan}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="arisan"
                                        className="form-label"
                                    >
                                        Lembur
                                    </label>
                                    <NumericFormat
                                        id="lembur"
                                        name="lembur"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.lembur}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="arisan"
                                        className="form-label"
                                    >
                                        Uang Makan
                                    </label>
                                    <NumericFormat
                                        id="makan"
                                        name="makan"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.makan}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="kesra"
                                        className="form-label"
                                    >
                                        Kesra
                                    </label>
                                    <NumericFormat
                                        id="kesra"
                                        name="kesra"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={data.kesra}
                                        allowLeadingZeros
                                        thousandSeparator=","
                                    />
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-primary">
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
