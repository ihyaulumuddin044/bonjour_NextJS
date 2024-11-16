import ProductView from "@/views/Product";
import { productType } from "@/types/products.type";

const productPage = ( props: { products: productType[] }) => {
    const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};


export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/productApi");
  const response = await res.json();
  console.log(response);
  return {
    props: {
      products: response.data,
    },
  };
}
export default productPage;

