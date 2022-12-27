import Image from "next/image";
import Link from "next/link";
import Style from "./product.module.css";
const Product = ({ title, price, img, description, url }) => {
  return (
    <Link href={url} className={Style.container}>
      <div className={Style.img}>
        <Image
          src={img}
          alt={title}
          width={350}
          height={400}
          lazy
          objectFit="contain"
        />
      </div>
      <div className={Style.info}>
        <div>{title}</div>
        <div>
          {description.substr(0, 70)}... <span>read more</span>
        </div>
        <span>${price}</span>
      </div>
    </Link>
  );
};
export default Product;
