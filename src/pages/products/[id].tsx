// import { console } from "inspector";
import { fetcher } from "@/lib/swr/fetcher";
import { productType } from "@/types/products.type";
import DetailProduct from "@/views/DetailProducts";
import { useRouter } from "next/router";
import useSWR from "swr";

const ProductDetail = ({ products }: { products: productType }) => {
  const { query } = useRouter();
  // // fatch api mengunakan swr
  // const { data, error, isLoading } = useSWR(`/api/productApi/${query.id}`, fetcher);
  // console.log(data);
  // console.log()
  return (
    <div>
      {/* client-side-rendering */}
      {/* <div><DetailProduct product={isLoading ? [] : data.data}/></div> */}
      {/* server-side-rendering */}
      <DetailProduct product={products} />
    </div>
  );
};

export default ProductDetail;

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  console.log(params.id);
  const res = await fetch(`http://localhost:3000/api/productApi/${params.id}`);
  const response = await res.json();
  console.log(response);
  return {
    props: {
      products: response.data,
    },
  };
}
