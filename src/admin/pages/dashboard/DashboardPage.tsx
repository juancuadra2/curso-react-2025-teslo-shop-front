import { AdminTitle } from "@/admin/components/AdminTitle"
import { ChartAreaInteractive } from "@/admin/components/ChartAreaInteractive"
import { DataTable } from "@/admin/components/DataTable"
import { SectionCards } from "@/admin/components/SectionCards"

import data from "@/mocks/data.json"

export const DashboardPage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

          <AdminTitle title="Bienvenido al Panel de Administración" subtitle="Aqui puedes ver el estado de tu negocio" />

          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  )
}
