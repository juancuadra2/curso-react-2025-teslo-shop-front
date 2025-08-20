import { useQuery } from "@tanstack/react-query"
import { getProductsAction } from "../actions/get-products.actions"
import { useParams, useSearchParams } from "react-router"

export const useProducts = () => {

  const [ searhParams ] = useSearchParams();
  const { gender } = useParams();

  const limit = searhParams.get('limit') || 9;
  const page = searhParams.get('page') || 1;
  const sizes = searhParams.get('sizes') || undefined;
  const price = searhParams.get('price');
  const query = searhParams.get('query') || undefined;

  let minPrice: undefined | number;
  let maxPrice: undefined | number;
  switch (price) {
    case '0-50':
      minPrice = 0;
      maxPrice = 50;
      break;
    case '51-100':
      minPrice = 51;
      maxPrice = 100;
      break;
    case '101-200':
      minPrice = 101;
      maxPrice = 200;
      break;
    case '200+':
      minPrice = 200;
      break;
  }


  const offset = (Number(page) - 1) * Number(limit);

  return useQuery({
    queryKey: ['products', { offset, limit, sizes, gender, minPrice, maxPrice, query }],
    queryFn: () => getProductsAction({
      limit,
      offset: isNaN(offset) ? 0 : offset,
      sizes,
      gender,
      minPrice: minPrice ?? undefined,
      maxPrice: maxPrice ?? undefined,
      query
    }),
    staleTime: 1000 * 60 * 5,
  })
}
