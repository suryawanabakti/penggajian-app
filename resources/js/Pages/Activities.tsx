import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
export default function Activities({
    auth,
    activities,
}: {
    auth: any;
    activities: any;
}) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Activities" />

            <div className="page-body">
                <div className="container-xl">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">My Activity</h3>
                        </div>
                        <div className="list-group list-group-flush">
                            {activities.map((data: any) => {
                                return (
                                    <div className="list-group-item">
                                        <div className="row align-items-center">
                                            <div className="col-auto"></div>
                                            <div className="col ">
                                                <div className="d-block   mt-n1">
                                                    {data.description}
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
