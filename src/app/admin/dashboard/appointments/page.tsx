import type { Metadata } from "next";
import { getAppointments } from "@/actions/appointments";
import { AppointmentsTable } from "@/components/admin/AppointmentsTable";

export const metadata: Metadata = {
  title: "Randevular",
  robots: { index: false, follow: false },
};

export default async function AppointmentsPage() {
  const appointments = await getAppointments();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-navy-900">Randevu Yönetimi</h1>
        <p className="mt-1 text-sm text-slate-500">
          Tüm randevuları görüntüleyin, onaylayın veya yeniden planlayın.
        </p>
      </div>
      <AppointmentsTable appointments={appointments} />
    </div>
  );
}
