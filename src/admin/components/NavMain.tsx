import { IconChartBar, IconDashboard, IconFolder, IconListDetails, IconUsers } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router"

const data = {
  items: [
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
}

export function NavMain() {

  const { pathname } = useLocation();

  const isActiveRoute = (to: string) => {
    if (pathname.includes("/admin/products") && to === "/admin/products") return true;
    return pathname === to;
  };

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">

        <SidebarMenu>
          {data.items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} asChild isActive={isActiveRoute(item.url || "/admin")} >
                <Link to={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

      </SidebarGroupContent>
    </SidebarGroup>
  )
}
