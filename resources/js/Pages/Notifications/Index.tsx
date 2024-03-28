import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
export default function Index({
    auth,
    notifications,
}: {
    auth: any;
    notifications: any;
}) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="notifications" />

            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">My Notification</h3>
                        </div>
                        <div className="list-group list-group-flush">
                            {notifications.map((data: any) => {
                                return (
                                    <div className="list-group-item">
                                        <div className="row align-items-center">
                                            <div className="col-auto"></div>
                                            <div className="col ">
                                                <div className="d-block mt-n1">
                                                    {data.data.data}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
