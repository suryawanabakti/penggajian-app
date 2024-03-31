import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { route } from "../../../../../vendor/tightenco/ziggy/src/js";

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
        nidn: employee.nidn,
        nik: employee.nik,
        jenis_kelamin: employee.user.gender,
    });

    const handleChange = (e: any) => {
        console.log(e.target.value);
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
                                                checked={
                                                    data.jenis_kelamin ===
                                                    "male"
                                                }
                                                name="jenis_kelamin"
                                                onChange={handleChange}
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
                                                checked={
                                                    data.jenis_kelamin ===
                                                    "female"
                                                }
                                                onChange={handleChange}
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
                                        message={errors.waktu_bekerja}
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
                                        message={errors.nomor_handphone}
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
