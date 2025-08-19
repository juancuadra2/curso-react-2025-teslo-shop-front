import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import CustomJumbotron from "@/shop/components/CustomJumbotron"
import ProductsGrid from "@/shop/components/ProductsGrid"

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron
        title="Bienvenido a la Tienda"
        subtitle="Explora nuestra colección de productos únicos."
      />

      <ProductsGrid products={products} />

      <CustomPagination totalPages={5} />
    </>
  )
}
