import Style from "./style.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Explor() {
  return (
    <section className={Style.container}>
      <header>
        <h2>Explore your baby's needs...</h2>
        <p>
          From accessories to modern clothing, there's something for everyone in
          our store.
        </p>
      </header>
      <div className={Style.carts}>
        <Cart title="Women" img="/home/women.jpg" link="/store/women" />
        <Cart title="Men" img="/home/men.jpg" link="/store/men" />
        <Cart title="Kids" img="/home/kids.jpg" link="/store/kids" />
      </div>
    </section>
  );
}

function Cart({ title, img, link }) {
  const router = useRouter();

  return (
    <div className={Style.cart}>
      <Image src={img} alt={title} width={350} height={400} objectFit="cover" />
      <div className={Style.btn} onClick={() => router.push(link)}>
        {title}
      </div>
    </div>
  );
}
