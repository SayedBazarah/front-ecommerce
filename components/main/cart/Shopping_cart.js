
import { useState } from "react";
import Style from "./style.module.css"
import The_second_part from "./the_second_part";
const Shopping_cart= () => {
        const [Shopping]=useState([
                "Shopping_cart/2.jpg",
        ])
    return (
        <>
        <div className={Style.parent}> 
        <div>
       <div className={Style.first}> 
        <h2> Shopping cart</h2>
       <p> Store<span>/Shopping cart</span></p>
     </div>
       <div className={Style.img_1}>
        <img className={Style.img} src={Shopping[0]}/>
        <div className={Style.main}>
          <h4> title</h4>
                <p>Qty:1 <span className={Style.main_1}>$49.99 </span></p>
                </div> 
        </div>

        <div className={Style.main_3}> 
        <hr/> 
        <h5>TOTAL <span className={Style.main_2}>$49.99 </span></h5>
       <p>Looking for more?  <a href="#">Continue shopping</a></p>
      </div>
      </div>
      <The_second_part/>
      </div>
        </>
        )
}

export default Shopping_cart;