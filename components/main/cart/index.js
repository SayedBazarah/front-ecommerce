import Hero from "../common/Hero";
import Filter from "../common/filter";

import { useState } from "react";
import Style from "./style.module.css";
import The_second_part from "./the_second_part";

const CartComponents = () => {
  const [Shopping] = useState(["Shopping_cart/2.jpg"]);
  return (
    <>
      <Hero title="Cart" img="/babycare/hero.avif" />
      <Filter />

      <div>
        <div className={Style.container}></div>
      </div>
    </>
  );
};
export default CartComponents;

{
  /* <div>
            <div className={Style.first}>
              <h2> Shopping cart</h2>
              <p>
                Store<span>/Shopping cart</span>
              </p>
            </div>
            <div className={Style.img_1}>
              <img className={Style.img} src={Shopping[0]} />
              <div className={Style.main}>
                <h4> title</h4>
                <p>
                  Qty:1 <span className={Style.main_1}>$49.99 </span>
                </p>
              </div>
            </div>

            <div className={Style.main_3}>
              <hr />
              <h5>
                TOTAL <span className={Style.main_2}>$49.99 </span>
              </h5>
              <p>
                Looking for more? <a href="#">Continue shopping</a>
              </p>
        //     </div>
        //   </div>
        //   {/* <The_second_part /> */
}
// </div> */}
