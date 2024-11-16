import { productType } from "@/types/products.type";
import style from "./DetailProduct.module.scss";

const DetailProduct = ({ product }: { product: productType }) => {
  return (
    <>
      <h1 className={style.title}>product Detail</h1>
      <div className={style.productDetail}>
        <div className={style.productDetail__image}>
          <img src={product.image} alt={product.image} />
        </div>
        <h4 className={style.productDetail__name}>{product.name}</h4>
        <p className={style.productDetail__category}>{product.category}</p>
        <p className={style.productDetail__price}>
          {product.price &&
            product.price.toLocaleString("id-ID", {
              currency: "IDR",
              style: "currency",
            })}
        </p>
      </div>
    </>
  );
};
export default DetailProduct;
