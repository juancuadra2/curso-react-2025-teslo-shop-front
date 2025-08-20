import { useRef } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate, useParams, useSearchParams } from "react-router";
import { cn } from "@/lib/utils";
import { CustomLogo } from "@/components/custom/CustomLogo";
import { ModeToggle } from "@/components/mode-toggle";
import { useAuthStore } from "@/auth/store/auth.store";

const CustomHeader = () => {

    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    // useSearchParams se usa para obtener los query parameters de la URL que son opcionales
    const [searchParams, setSearchParams] = useSearchParams();

    // useParams se usa para obtener los parámetros de la URL actual. Ejemplo: /gender/men
    const { gender } = useParams();

    const query = searchParams.get("query") || "";
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== "Enter") return;
        const queryValue = inputRef.current?.value.trim();
        const newSearchParams = new URLSearchParams();
        if (!queryValue) {
            newSearchParams.delete("query");
        } else {
            newSearchParams.set("query", queryValue);
        }
        setSearchParams(newSearchParams);
    }

    const handleLogout = () => {
        logout();
        navigate("/auth/login");
    }

    return <header className="sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <CustomLogo />

                {/* Navigation - Desktop */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link to="/" className={cn("text-sm font-medium transition-colors hover:text-primary", !gender ? 'underline' : '')}>
                        Todos
                    </Link>
                    <Link to="/gender/men" className={cn("text-sm font-medium transition-colors hover:text-primary", gender === 'men' ? 'underline' : '')}>
                        Hombres
                    </Link>
                    <Link to="/gender/women" className={cn("text-sm font-medium transition-colors hover:text-primary", gender === 'women' ? 'underline' : '')}>
                        Mujeres
                    </Link>
                    <Link to="/gender/kid" className={cn("text-sm font-medium transition-colors hover:text-primary", gender === 'kids' ? 'underline' : '')}>
                        Niños
                    </Link>
                </nav>

                {/* Search and Cart */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                ref={inputRef}
                                placeholder="Buscar productos..."
                                className="pl-9 w-64 h-9 bg-white pr-9"
                                onKeyDown={handleInputChange}
                                defaultValue={query}
                            />
                        </div>
                    </div>

                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Search className="h-5 w-5" />
                    </Button>

                    {user ? (
                        <Button variant="default" size="sm" className="ml-2" onClick={handleLogout}>
                            Cerrar sesión
                        </Button>
                    ) : (
                        <Link to="/auth/login">
                            <Button variant="default" size="sm" className="ml-2">
                                Iniciar sesión
                            </Button>
                        </Link>
                    )}

                    <Link to="/admin">
                        <Button variant="destructive" size="sm" className="ml-2">
                            Admin
                        </Button>
                    </Link>

                    <ModeToggle />
                </div>
            </div>
        </div>
    </header>;
}

export default CustomHeader;
