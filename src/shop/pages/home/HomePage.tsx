import { CustomPagination } from "@/components/custom/CustomPagination"
import CustomJumbotron from "@/shop/components/CustomJumbotron"
import ProductsGrid from "@/shop/components/ProductsGrid"
import { useProducts } from "@/shop/hooks/use-products"

export const HomePage = () => {

  const { data } = useProducts();  

  return (
    <>
      <CustomJumbotron
        title="Bienvenido a la Tienda"
        subtitle="Explora nuestra colección de productos únicos."
      />

      <ProductsGrid products={ data?.products || [] } />

      <CustomPagination totalPages={ data?.pages || 0 } />
    </>
  )
}
