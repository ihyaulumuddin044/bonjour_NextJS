import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const productPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const [products, setProducts] = useState([]);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);
  const {data, error, isLoading} = useSWR("/api/productApi", fetcher);
  // console.log(data)
  // console.log(error)
  // console.log(isLoading)

  // useEffect(() => {
  //   fetch("/api/productApi").then((res) => {
  //     res.json().then((response) => {
  //       setProducts(response.data);
  //     });
  //   });
  // }, []);
  return (
    <div>
      <ProductView products={isLoading ? [] : data.data}/>
    </div>
  );
};

export default productPage;
