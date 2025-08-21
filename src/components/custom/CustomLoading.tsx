import { Loader2Icon } from 'lucide-react'

export const CustomLoading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Loader2Icon className="animate-spin text-9xl text-primary mb-4" />
            <span className="text-lg font-semibold text-primary">Verificando autenticación...</span>
        </div>
    )
}
