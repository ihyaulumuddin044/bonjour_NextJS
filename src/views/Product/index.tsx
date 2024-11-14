import { productType } from "@/types/products.type";
import style from "./products.module.scss";

const ProductView = ({ products }: { products: productType[] }) => {
  return (
    <div>
      <h1 className={style.product__title}>product pages test</h1>
      <div className={style.product__content}>
        {products.length > 0 ? (
          <>
            {products.map((product: productType) => (
              <div key={product.id} className={style.product__content__item}>
                <div className={style.product__content__item__image}>
                  <img src={product.image} alt="" />
                </div>
                <h4 className={style.product__content__item__name}>
                  {product.name}
                </h4>
                <p className={style.product__content__item__category}>
                  {product.category}
                </p>
                <p className={style.product__content__item__price}>
                  {product.price.toLocaleString("id-ID", {
                    currency: "IDR",
                    style: "currency",
                  })}
                </p>
              </div>
            ))}
          </>
        ) : (
          <div className={style.product__content__skeleton}>
            <div className={style.product__content__skeleton__image} />
            <div className={style.product__content__skeleton__name} />
            <div className={style.product__content__skeleton__category} />
            <div className={style.product__content__skeleton__price} />
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductView;
