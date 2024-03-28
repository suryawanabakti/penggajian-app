import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, positions, employee }: any) {
    const { data, setData, put, errors, processing } = useForm({
        nama: employee.user.name,
        email: employee.user.email,
        password: "",
        password_confirmation: "",
        jabatan: employee.position_id,
        alamat: employee.address,
        waktu_bekerja: employee.start_working,
        nomor_handphone: employee.phone,
    });

    const handleChange = (e: any) => {
        e.preventDefault();
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        put(route("admin.employees.update", employee.id));
    };

    const dropdown = <Link href="/admin/employees">Kembali</Link>;
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
                                <div className="mb-3">
                                    <InputLabel
                                        htmlFor="position"
                                        value="Jabatan"
                                    />

                                    <select
                                        name="jabatan"
                                        id="position"
                                        className="form-select"
                                        onChange={handleChange}
                                        defaultValue={data.jabatan}
                                    >
                                        <option value="">Pilih Jabatan</option>
                                        {positions.map((data: any) => {
                                            return (
                                                <option
                                                    value={data.id}
                                                    key={data.id}
                                                >
                                                    {data.name}
                                                </option>
                                            );
                                        })}
                                    </select>

                                    <InputError
                                        className="mt-2"
                                        message={errors.jabatan}
                                    />
                                </div>
                                <div className="mb-3">
                                    <InputLabel
                                        htmlFor="address"
                                        value="Alamat"
                                    />

                                    <TextInput
                                        id="address"
                                        name="alamat"
                                        className=""
                                        value={data.alamat}
                                        onChange={handleChange}
                                        required
                                        autoComplete="address"
                                        placeholder="...."
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.alamat}
                                    />
                                </div>
                                <div className="mb-3">
                                    <InputLabel
                                        htmlFor="waktu_bekerja"
                                        value="Waktu Bekerja"
                                    />

                                    <TextInput
                                        id="waktu_bekerja"
                                        name="waktu_bekerja"
                                        className=""
                                        value={data.waktu_bekerja}
                                        onChange={handleChange}
                                        required
                                        autoComplete="address"
                                        placeholder="...."
                                        type="date"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.alamat}
                                    />
                                </div>
                                <div className="mb-3">
                                    <InputLabel
                                        htmlFor="nomor_handphone"
                                        value="Nomor Handphone / Nomor WA Aktif"
                                    />

                                    <TextInput
                                        id="nomor_handphone"
                                        name="nomor_handphone"
                                        value={data.nomor_handphone}
                                        onChange={handleChange}
                                        required
                                        autoComplete="nomor_handphone"
                                        placeholder="...."
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.alamat}
                                    />
                                </div>
                                <div className="mb-3">
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        className=""
                                        value={data.email}
                                        name="email"
                                        onChange={handleChange}
                                        required
                                        autoComplete="email"
                                        placeholder="...."
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.email}
                                    />
                                </div>
                                <div className="mb-3">
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password (Isi jika perlu ganti password)"
                                    />

                                    <TextInput
                                        id="password"
                                        className=""
                                        value={data.password}
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        placeholder="...."
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.password}
                                    />
                                </div>
                                <div className="mb-3">
                                    <InputLabel
                                        htmlFor="password_confirmation"
                                        value="Konfirmasi Password"
                                    />

                                    <TextInput
                                        id="password_confirmation"
                                        className=""
                                        value={data.password_confirmation}
                                        type="password"
                                        name="password_confirmation"
                                        onChange={handleChange}
                                        placeholder="...."
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.password_confirmation}
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
