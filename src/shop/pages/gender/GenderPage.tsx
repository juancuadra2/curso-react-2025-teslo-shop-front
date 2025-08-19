import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import CustomJumbotron from "@/shop/components/CustomJumbotron"
import ProductsGrid from "@/shop/components/ProductsGrid"
import { useParams } from "react-router"

export const GenderPage = () => {

  const { gender } = useParams();
  const genderLabel = gender === 'men' ? 'hombres' : gender === 'women' ? 'mujeres' : 'niños';

  return (
    <>
      <CustomJumbotron
        title={`Productos para ${genderLabel}`}
        subtitle={`Encuentra los mejores productos para ${genderLabel.toLowerCase()}.`}
      />

      <ProductsGrid products={products} />

      <CustomPagination totalPages={5} />
    </>
  )
}
