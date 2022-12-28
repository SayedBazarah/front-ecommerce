
import Style from "./part2.module.css"
const The_second_part= () => {
return (
<>
<div>
    <div className={Style.classStyle}>
      <h2> Checkout</h2>
      <p>Enter your email address. This address will be used to send you order status updates.</p>
         <input className={Style.classStyle_1} name="name " type={"email"} placeholder="Your email address"/>
        <div className={Style.classStyle_2}>
        <label><input type={"checkbox"}/>
       Keep me up to date on news and exclusive offers</label></div>
      <div className={Style.classStyle_3}>
        <input type={"button"} value="checkout"/>
        <span> All data is transmitted encrypted via <br/>a secure TLS connection</span>
      </div>
      <div className={Style.classStyle_4}>
        <h4> Next</h4>
        <hr/>
        <p>Payment information <br/><span className={Style.classStyle_5}>Choose a payment method and enter your payment details. </span></p>
        <p>Order confirmation <br/><span className={Style.classStyle_5}> Place your order and receive a confirmation email..</span></p>
      </div>
      </div>
      </div>
      </>
)}
export default The_second_part;