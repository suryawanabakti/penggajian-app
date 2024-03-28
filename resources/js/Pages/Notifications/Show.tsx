import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Show({ auth, notification }: any) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Notification"
            link="/admin/dashboard"
        >
            <Head title="Notification" />

            <div className="page-body">
                <div className="container">{notification.data?.data}</div>
            </div>
        </AuthenticatedLayout>
    );
}
