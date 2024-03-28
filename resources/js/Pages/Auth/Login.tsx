import { useEffect, FormEventHandler, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import PasswordToggle from "@/Components/PasswordToggle";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className="d-flex flex-column bg-white">
                <div className="row g-0 flex-fill">
                    <div className="col-12 col-lg-6 col-xl-4 border-top-wide border-danger d-flex flex-column justify-content-center">
                        <div className="container container-tight my-5 px-lg-5">
                            {status && (
                                <div className="mb-3 text-sm text-success">
                                    {status}
                                </div>
                            )}

                            <div className="text-center mb-4">
                                <Link
                                    href="/"
                                    className="navbar-brand navbar-brand-autodark"
                                >
                                    <ApplicationLogo width="70" />
                                </Link>
                            </div>
                            <h2 className="h3 text-center mb-3">
                                Masuk ke akun anda
                            </h2>
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <InputLabel value="Email" />

                                    <TextInput
                                        type="email"
                                        placeholder="kamu@email.com"
                                        autoComplete="off"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError message={errors.email} />
                                </div>
                                <div className="mb-2">
                                    <InputLabel>
                                        Password
                                        {canResetPassword ?? (
                                            <span className="form-label-description">
                                                <a href="/forgot-password">
                                                    Saya lupa kata sandi
                                                </a>
                                            </span>
                                        )}
                                    </InputLabel>
                                    <div className="input-group input-group-flat">
                                        <TextInput
                                            required
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Password anda"
                                            autoComplete="new-password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <span className="input-group-text">
                                            <PasswordToggle
                                                setShowPassword={
                                                    setShowPassword
                                                }
                                                showPassword={showPassword}
                                            />
                                        </span>
                                    </div>
                                    <InputError message={errors.password} />
                                </div>

                                <div className="form-footer">
                                    <PrimaryButton disabled={processing}>
                                        Sign In
                                    </PrimaryButton>
                                </div>
                            </form>
                            <div className="text-center text-muted mt-3">
                                Made with 🤎 by Serlina.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-8 d-none d-lg-block">
                        {/* Photo */}
                        <div
                            className="bg-cover h-100 min-vh-100"
                            style={{
                                backgroundImage: "url(/static/unitama.jpg)",
                            }}
                        />
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
