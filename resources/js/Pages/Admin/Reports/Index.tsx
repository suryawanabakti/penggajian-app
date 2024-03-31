import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { IconSend } from "@tabler/icons-react";
import FlashMessage from "@/Components/FlashMessage";
import { FormEventHandler } from "react";

export default function Index({ auth, month, year }: any) {
    const { flash }: any = usePage().props;
    const { data, setData, processing, errors, get } = useForm({
        tahun: year,
        bulan: month,
    });
    const handleChange = (e: any) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        get("/admin/reports/show");
    };
    return (
        <AuthenticatedLayout user={auth.user} header="Laporan">
            <Head title="Laporan" />

            <div className="page-body">
                <div className="container">
                    <FlashMessage flash={flash.message} />
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">
                                        Bulan
                                    </label>
                                    <select
                                        defaultValue={data.bulan}
                                        name="bulan"
                                        onChange={handleChange}
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
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">
                                        Tahun
                                    </label>
                                    <input
                                        name="tahun"
                                        value={data.tahun}
                                        type="number"
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                </div>
                                <button
                                    className={`btn btn-primary ${
                                        processing ? "btn-loading" : ""
                                    }`}
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
