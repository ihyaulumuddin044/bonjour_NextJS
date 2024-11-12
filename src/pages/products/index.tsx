import { useRouter } from "next/router";
import { useEffect, useState } from "react";


type productType = {
  id: number,
  name: string,
  harga: number,
  ukuran: string
}
const productPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("/api/productApi").then((res) => {
      res.json().then((response) => {
        setProducts(response.data);
      });
    });
  }, []);
  return (
    <div>
      <h1>product pages test</h1>
      {products.map((product: productType) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.harga}</p>
          <p>{product.ukuran}</p>
        </div>
      ))}
    </div>
  );
};

export default productPage;
