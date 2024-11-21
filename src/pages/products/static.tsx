import ProductView from "@/views/Product";
import { productType } from "@/types/products.type";

const ProductPage = ( props: { products: productType[] }) => {
    const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};


export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/productApi");

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const response = await res.json();
    return {
      props: {
        products: response.data || [],
      },
      // revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        products: [],  // Kirim data kosong jika ada error
      },
    };
  }
}

export default ProductPage;

