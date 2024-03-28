import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, positions }: any) {
    const { data, setData, post, errors, processing } = useForm({
        nama: "",
    });

    const handleChange = (e: any) => {
        e.preventDefault();
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        post(route("admin.positions.store"));
    };

    const dropdown = <Link href="/admin/positions">Kembali</Link>;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Tambah Jabatan"
            dropdown={dropdown}
        >
            <Head title="Tambah Jabatan" />

            <div className="page-body">
                <div className="container">
                    <div className="card">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <InputLabel
                                        htmlFor="name"
                                        value="Nama Lengkap"
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
