import Image from "next/image";
import Style from "./hero.module.css";

export default function NewsLetter() {
  return (
    <section>
      <div className={Style.container}>
        <div className={Style.img}>
          <Image
            src="/home/newsletter.jpg"
            alt="contact us image"
            width={1366}
            height={600}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={Style.txt}>
          <h2>SUBSCRIPT TO NEWSLETTER</h2>
          <form>
            <input type="text" placeholder="example@domain.com" />
            <input type="submit" value="→" />
          </form>
          <div
            className={Style.button}
            onClick={() => route.push("/store")}
          ></div>
        </div>
      </div>
    </section>
  );
}
