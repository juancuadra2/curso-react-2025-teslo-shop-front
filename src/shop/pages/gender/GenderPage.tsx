import { CustomPagination } from "@/components/custom/CustomPagination"
import CustomJumbotron from "@/shop/components/CustomJumbotron"
import ProductsGrid from "@/shop/components/ProductsGrid"
import { useProducts } from "@/shop/hooks/use-products"
import { useParams } from "react-router"

export const GenderPage = () => {

  const { gender } = useParams();
  const { data } = useProducts();

  const genderLabel = gender === 'men' ? 'hombres' : gender === 'women' ? 'mujeres' : 'niños';

  return (
    <>
      <CustomJumbotron
        title={`Productos para ${genderLabel}`}
        subtitle={`Encuentra los mejores productos para ${genderLabel.toLowerCase()}.`}
      />

      <ProductsGrid products={data?.products || []} />

      <CustomPagination totalPages={data?.pages || 1} />
    </>
  )
}
