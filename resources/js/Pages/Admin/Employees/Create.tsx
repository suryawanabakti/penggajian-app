import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, positions }: any) {
    const { data, setData, post, errors, processing } = useForm({
        nama: "",
        email: "",
        password: "",
        password_confirmation: "",
        jabatan: "",
        alamat: "",
        waktu_bekerja: "",
        nomor_handphone: "",
        nik: "",
        nidn: "",
        jenis_kelamin: "",
    });

    const handleChange = (e: any) => {
        e.preventDefault();
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        post("/admin/employees");
    };

    const dropdown = <Link href="/admin/employees">Kembali</Link>;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Tambah Pegawai"
            dropdown={dropdown}
        >
            <Head title="Tambah Pegawai" />

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
                                    <InputLabel htmlFor="" value="NIK" />

                                    <TextInput
                                        id="nik"
                                        className=""
                                        value={data.nik}
                                        required
                                        isFocused
                                        autoComplete="nik"
                                        name="nik"
                                        onChange={handleChange}
                                        placeholder="...."
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.nik}
                                    />
                                </div>
                                <div className="mb-3">
                                    <InputLabel htmlFor="" value="NIDN" />

                                    <TextInput
                                        id="nidn"
                                        className=""
                                        value={data.nidn}
                                        isFocused
                                        autoComplete="nidn"
                                        name="nidn"
                                        onChange={handleChange}
                                        placeholder="...."
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.nidn}
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className="form-label">
                                        Jenis Kelamin
                                    </div>
                                    <div>
                                        <label className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                value={"male"}
                                                name="jenis_kelamin"
                                                onClick={handleChange}
                                            />
                                            <span className="form-check-label">
                                                Laki-laki
                                            </span>
                                        </label>
                                        <label className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="jenis_kelamin"
                                                value={"female"}
                                                onClick={handleChange}
                                            />
                                            <span className="form-check-label">
                                                Perempuan
                                            </span>
                                        </label>
                                    </div>
                                    <InputError
                                        className="mt-2"
                                        message={errors.jenis_kelamin}
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
                                        value="Mulai bekerja"
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
                                        value="Password"
                                    />

                                    <TextInput
                                        id="password"
                                        className=""
                                        value={data.password}
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        required
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
                                        required
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
