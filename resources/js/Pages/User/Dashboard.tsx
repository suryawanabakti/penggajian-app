import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { IconDownload } from "@tabler/icons-react";

export default function Dashboard({ auth, salaries }: any) {
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
        <AuthenticatedLayout user={auth.user} header="Dashboard Gajian Saya">
            <Head title="Daftar Gajian Saya" />
            <div className="page-body">
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Daftar Gajian</h4>
                        </div>
                        <div className="table-responsive">
                            <table className="card-table table table-hover">
                                <thead>
                                    <tr>
                                        <th>Tanggal</th>
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
                                                <td className="text-nowrap fw-bold">
                                                    {data.tanggal}
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
