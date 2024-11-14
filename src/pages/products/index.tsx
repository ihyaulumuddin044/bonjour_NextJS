import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



const productPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  });

  useEffect(() => {
    fetch("/api/productApi").then((res) => {
      res.json().then((response) => {
        setProducts(response.data);
      });
    });
  }, []);
  return (
    <div>
      <ProductView products={products}/>
    </div>
  );
};

export default productPage;
