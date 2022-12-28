import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Style from "./productPage.module.css";
import Counter from "../common/counter";
import { useContext } from "react";
import AuthContext from "../../../context/AuthProvider";

function ProductPage({ product }) {
  const { cart, setCart } = useContext(AuthContext);
  let [size, setSize] = useState();
  let [count, setCount] = useState(1);
  console.log(cart);
  async function handleAddtoCart() {
    if (size === undefined || size === "Select Size") return;
    let productDetails = {
      title: product.title,
      category: product.category,
      thumbnail: product.thumbnail,
      slug: product.slug,
      size,
      count,
    };
    //Check if the Product Existing and increate count
    //get count from old product obj
    let oldProduct = cart;
    oldProduct = oldProduct.filter((item) => item.slug == product.slug);
    if (oldProduct.length > 0) {
      productDetails.count += oldProduct[0].count;
    }

    //delete old obj from list and add the new
    let newCart = cart;
    newCart = newCart.filter((item) => item.slug !== product.slug);
    newCart.push(productDetails);
    setCart(newCart);
  }

  return (
    <div className={Style.container}>
      <section className={Style.details}>
        <div className={Style.images}>
          <Image
            src={product.images[0]}
            alt={product.title}
            width={450}
            height={640}
            objectFit="container"
          />
          <Image
            src={product.images[1]}
            alt={product.title}
            width={450}
            height={640}
          />
        </div>
      </section>
      <section className={Style.info}>
        <div className={Style.header}>
          <h1>{product.title}</h1>
          <Link href={`/store/${product.category}`}>
            {product.category.toUpperCase()}
          </Link>
        </div>
        <div className={Style.details}>
          <span>Details</span>
          <p>${product.price}</p>
          <p>inclusive of VAT</p>
          <p>Box size: {product.weight} kg</p>
          <select
            id="size"
            defaultValue="Select Size"
            onChange={(e) => setSize(e.target.value)}
          >
            {["Select Size", "SM", "M", "L", "XL", "XXL"].map((size, index) => (
              <option key={index}>{size}</option>
            ))}
          </select>
          <Counter count={count} setCount={setCount} />
          <button className={Style.btn} onClick={handleAddtoCart}>
            ADD TO BAG
          </button>
        </div>
        <div className={Style.features}>
          <span>Features</span>
          <p>{product.description}</p>
        </div>
      </section>
      <div className={Style.imgMobile}>
        <Image
          src={product.images[0]}
          alt={product.title}
          width={450}
          height={640}
          objectFit="container"
        />
      </div>
    </div>
  );
}

export default ProductPage;
