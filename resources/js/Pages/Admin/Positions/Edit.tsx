import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, position }: any) {
    const { data, setData, put, errors, processing } = useForm({
        nama: position.name,
    });

    const handleChange = (e: any) => {
        e.preventDefault();
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        put(route("admin.positions.update", position.id));
    };

    const dropdown = <Link href="/admin/positions">Kembali</Link>;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Edit Pegawai"
            dropdown={dropdown}
        >
            <Head title="Edit Pegawai" />

            <div className="page-body">
                <div className="container">
                    <div className="card">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <InputLabel
                                        htmlFor="name"
                                        value="Nama Jabatan"
                                    />

                                    <TextInput
                                        id="name"
                                        className=""
                                        value={data.nama}
                                        required
                                        isFocused
                                        autoComplete="name"
                                        name="nama"
                                        onChange={handleChange}
                                        placeholder="...."
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.nama}
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
                                <button className="btn btn-secondary">
                                    Batal
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
