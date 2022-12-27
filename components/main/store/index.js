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
      <Filter />
      <div className={Style.container}>
        <section className={Style.wrapper}>
          <div className={Style.carts}>
            <Cart title="WOMEN" img="/home/women.jpg" link="/store/women" />
            <Cart title="MEN" img="/home/men.jpg" link="/store/men" />
            <Cart title="KIDS" img="/home/kids.jpg" link="/store/kids" />
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
    <div className={Style.cart} style={{ backgroundImage: img }}>
      <div className={Style.btn} onClick={() => router.push(link)}>
        {title}
      </div>
    </div>
  );
}
