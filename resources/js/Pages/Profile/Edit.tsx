import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { IconCaretDown } from "@tabler/icons-react";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout user={auth.user} header="Profile">
            <Head title="Profile" />

            <div className="page-body">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                            />
                        </div>
                    </div>

                    <div className="card mt-2">
                        <div className="card-body">
                            <UpdatePasswordForm />
                        </div>
                    </div>

                    <div className="card mt-2 mb-5">
                        <div className="card-body">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
