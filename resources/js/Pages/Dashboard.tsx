import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import { IconMoneybag, IconUsers } from "@tabler/icons-react";
import Chart from "react-apexcharts";
import { useState } from "react";

export default function Dashboard({
    auth,
    sudahGajianBulanIni,
    belumGajianBulanIni,
    jumlahKaryawan,
}: any) {
    const [labels, setLabels] = useState(["Belum Gajian", "Sudah Gajian"]);
    const [series, setSeries] = useState([
        belumGajianBulanIni,
        sudahGajianBulanIni,
    ]);
    const [options, setOptions] = useState({
        chart: {
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                export: {
                    csv: {
                        filename: undefined,
                        columnDelimiter: ",",
                        headerCategory: "Sertifikat",
                        headerValue: "Value",
                        dateFormatter(timestamp: any) {
                            return new Date(timestamp).toDateString();
                        },
                    },
                    svg: {
                        filename: undefined,
                    },
                    png: {
                        filename: undefined,
                    },
                },
                autoSelected: "zoom",
            },
        },
        colors: ["#F44336", "#008000"],
        labels: labels,
    });

    return (
        <AuthenticatedLayout user={auth.user} header="Dashboard">
            <Head title="Dashboard" />

            <div className="page-body">
                <div className="container">
                    <div className="row row-deck row-cards">
                        <div className="col-sm-6 col-lg-3">
                            <div className="card card-sm">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            <span className="bg-primary text-white avatar">
                                                {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                                                <IconUsers className="icon" />
                                            </span>
                                        </div>
                                        <div className="col">
                                            <div className="font-weight-medium">
                                                {jumlahKaryawan} Orang.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="card card-sm">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            <span className="bg-success text-white avatar">
                                                {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                                                <IconMoneybag className="icon" />
                                            </span>
                                        </div>
                                        <div className="col">
                                            <div className="font-weight-medium">
                                                Sudah Di Beri Gaji
                                            </div>
                                            <div className="text-secondary">
                                                1 Orang Bulan ini
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="card card-sm">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            <span className="bg-warning text-white avatar">
                                                {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
                                                <IconMoneybag className="icon" />
                                            </span>
                                        </div>
                                        <div className="col">
                                            <div className="font-weight-medium">
                                                Belum di berikan gaji
                                            </div>
                                            <div className="text-secondary">
                                                5 Orang bulan ini.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">
                                        Penggajian Bulan ini
                                    </h3>
                                    <div className="card-body">
                                        <Chart
                                            options={options}
                                            series={series}
                                            type="pie"
                                            labels={labels}
                                            width={400}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
