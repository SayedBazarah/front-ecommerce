import Image from "next/image";
import { useRouter } from "next/router";

import Hero from "../common/Hero";
import Filter from "../common/filter";
import Style from "./store.module.css";
import Product from "./productCart";

const StoreComponents = ({ products }) => {
  return (
    <>
      <Hero title="STORE" img="/store/hero.jpg" />
      <div className={Style.container}>
        <section className={Style.category}>
          <div className={Style.carts}>
            <Cart title="MEN" />
            <Cart title="WOMEN" />
            <Cart title="KIDS" />
          </div>
        </section>
        <section className={Style.bestselling}>
          <div className={Style.title}>
            <p>BEST SELLING </p>
          </div>
          <div className={Style.products}>
            {products &&
              products.map((product) => {
                let url = `/store/${product.category.toLowerCase()}/${
                  product.slug
                }`;
                return (
                  <Product
                    title={product.title}
                    description={product.description}
                    img={product.thumbnail}
                    price={product.price}
                    url={url}
                    key={product._id}
                  />
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
};
export default StoreComponents;

function Cart({ title, img, link }) {
  const router = useRouter();

  return (
    <div
      className={Style.cart}
      onClick={() => router.push(`/store/${title.toLowerCase()}`)}
    >
      <h3>{title}</h3>
    </div>
  );
}
