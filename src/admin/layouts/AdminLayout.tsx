import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "../components/AppSidebar"

import { Outlet } from "react-router"
import { AdminHeader } from "../components/SiteHeader"

const AdminLayout = () => {

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset"/>
      <SidebarInset>
          <AdminHeader />

          {/* Contenido principal */}
          <main className="px-4 lg:px-6">
            <Outlet />
          </main>

        </SidebarInset>
    </SidebarProvider>
  )
}

export default AdminLayout;