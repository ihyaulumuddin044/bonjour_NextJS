// import { console } from "inspector";
import { fetcher } from "@/lib/swr/fetcher";
import DetailProduct from "@/views/DetailProducts";
import { useRouter } from "next/router";
import useSWR from "swr";

const productDetail = () => {
  const { query } = useRouter();
  // fatch api mengunakan swr
  const { data, error, isLoading } = useSWR(`/api/productApi/${query.id}`, fetcher);
  console.log(data);
  // console.log()
  return (
    <div >
      <div><DetailProduct product={isLoading ? [] : data.data}/></div>
    </div>
  );
};

export default productDetail;
