import Link from "next/link";
import Image from "next/image";

import Style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={Style.container}>
      <section>
        <div className={Style.info}>
          <div>
            <h3>Address</h3>
            <p>
              3721 Single Street <br /> Quincy, MA 02169
            </p>
          </div>
          <div>
            <h3>Contacts</h3>
            <p>
              +2010199 10600 <br /> sayedbazarah@yahoo.com
            </p>
          </div>
          <div className={Style.links}>
            <h3>FAQ</h3>
            <Link href="/return-policy">Shipping Policy</Link>
            <Link href="/shipping-policy">Return Policy</Link>
          </div>
        </div>
        <div className={Style.subscribe}>
          <h3>Subscribe to our Newsletter</h3>
          <form>
            <input required type="email" placeholder="your email address" />
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      </section>
      <section>
        <Image
          src="/icons/twitter.png"
          alt="twitter icon"
          width={30}
          height={30}
        />
        <Image
          src="/icons/facebook.png"
          alt="facebook icon"
          width={30}
          height={30}
        />
        <Image
          src="/icons/instagram.png"
          alt="instagram icon"
          width={30}
          height={30}
        />
      </section>
    </footer>
  );
};
export default Footer;
