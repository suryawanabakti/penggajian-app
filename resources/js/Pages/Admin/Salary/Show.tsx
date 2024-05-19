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
import CreatableSelect from "react-select/creatable";
export default function Index({
    auth,
    employee,
    salary,
    dateOfSalary,
    monthOfSalary,
    listNumber,
}: any) {
    const { flash }: any = usePage().props;
    const numbers: any = listNumber.map((number: any) => {
        return {
            label: new Intl.NumberFormat("id-ID", {
                maximumSignificantDigits: 3,
            }).format(number.number),
            value: number.number,
        };
    });
    console.log("numbers", numbers);
    console.log(listNumber);
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
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "gaji_pokok",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="tunjangan_jabatan"
                                        className="form-label"
                                    >
                                        Tunjangan Jabatan
                                    </label>
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "tunjangan_jabatan",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="tunjangan_keluarga"
                                        className="form-label"
                                    >
                                        Tunjangan Keluarga
                                    </label>
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "tunjangan_keluarga",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="tunjangan_khusus"
                                        className="form-label"
                                    >
                                        Tunjangan Khusus
                                    </label>
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "tunjangan_khusus",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="tunjangan_lembur_dan_makan"
                                        className="form-label"
                                    >
                                        Tunjangan lembur & makan
                                    </label>
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "tunjangan_lembur_dan_makan",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="tunjangan_kelebihan_mengajar"
                                        className="form-label"
                                    >
                                        Tunjangan kelebihan mengajar
                                    </label>
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "tunjangan_kelebihan_mengajar",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="tunjangan_kesra"
                                        className="form-label"
                                    >
                                        Tunjangan Kesra
                                    </label>
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "tunjangan_kesra",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="potongan_pph21"
                                        className="form-label"
                                    >
                                        Potongan PPH21
                                    </label>
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "potongan_pph21",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="potongan_pinjaman_koperasi"
                                        className="form-label"
                                    >
                                        Potongan pinjaman koperasi
                                    </label>
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "potongan_pinjaman_koperasi",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="potongan_sumbangan_kyy"
                                        className="form-label"
                                    >
                                        Potongan sumbangan KYY
                                    </label>
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "potongan_sumbangan_kyy",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="potongan_simpanan_wajib"
                                        className="form-label"
                                    >
                                        Potongan simpanan wajib
                                    </label>
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "potongan_simpanan_wajib",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
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
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "potongan_bpjs_kesehatan_dan_tenagakerjaan",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="potongan_arisan"
                                        className="form-label"
                                    >
                                        Potongan Arisan
                                    </label>
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "potongan_arisan",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="potongan_dll"
                                        className="form-label"
                                    >
                                        Potongan Dan Lain-lain
                                    </label>
                                    <CreatableSelect
                                        isClearable
                                        onChange={(selectedOption: any) =>
                                            setData(
                                                "potongan_arisan",
                                                selectedOption.value
                                            )
                                        }
                                        options={numbers}
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
