import { IconLogout } from "@tabler/icons-react"
import { Button } from "../ui/button"
import { useAuthStore } from "@/auth/store/auth.store";
import { useNavigate } from "react-router";

export const CustomLogout = ({ className }: React.HTMLProps<HTMLButtonElement>) => {

    const navigate = useNavigate();
    const { logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        navigate("/auth/login");
    }

    return (
        <Button variant="ghost" className={ className } onClick={handleLogout}>
            <IconLogout />
            Cerrar sesión
        </Button>
    )
}
