import Hero from "../common/Hero";
import Filter from "../common/filter";
import Style from "./store.module.css";
import Product from "./productCart";

const Category = ({ title, products }) => {
  if (products.length == 0)
    return (
      <div className={Style.container}>
        <Hero title={title.toUpperCase()} img="/babycare/hero.avif" />
        <h2 style={{ textAlign: "center", margin: 100 }}>No Products Found</h2>
      </div>
    );

  return (
    <>
      <Hero title={title.toUpperCase()} img="/babycare/hero.avif" />
      <Filter />
      <section className={Style.bestselling}>
        <div className={Style.products}>
          {products.map((product) => {
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
    </>
  );
};
export default Category;
