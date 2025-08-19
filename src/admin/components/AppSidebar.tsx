import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { NavMain } from "./NavMain"
import { NavSecondary } from "./NavSecondary"
import { NavUser } from "./NavUser"
import { AdminSidebarHeader } from "./AdminSidebarHeader"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: IconDashboard,
    },
    {
      title: "Productos",
      url: "/admin/products",
      icon: IconListDetails,
    },
    {
      title: "Usuarios",
      url: "/admin/users",
      icon: IconChartBar,
    },
    {
      title: "Ordenes",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Reportes",
      url: "#",
      icon: IconUsers,
    },
  ],

  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      
      <SidebarHeader>
        <AdminSidebarHeader />
      </SidebarHeader>

      <SidebarContent>

        <NavMain />

        <NavSecondary items={data.navSecondary} className="mt-auto" />
        
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

    </Sidebar>
  )
}
