import type { PropsWithChildren } from "react";
import { RouterProvider } from "react-router"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner";
import { CustomLoading } from "./components/custom/CustomLoading";
import { appRouter } from "./app.router"
import { useAuthStore } from "./auth/store/auth.store";


const queryClient = new QueryClient();

const CheckAuthProvider = ({ children }: PropsWithChildren) => {

  const { checkAuthStatus} = useAuthStore();

  const { isLoading } = useQuery({
    queryKey: ['auth'],
    queryFn: checkAuthStatus,
    retry: false,
    refetchInterval: 1000 * 60 * 15,
    refetchOnWindowFocus: true
  })

  if (isLoading) {
    return <CustomLoading />;
  }

  return children;
}

export const TesloShopApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster richColors position="top-center" expand={true} />

      <CheckAuthProvider>
        <RouterProvider router={appRouter} />
      </CheckAuthProvider>

    </QueryClientProvider>
  )
}
