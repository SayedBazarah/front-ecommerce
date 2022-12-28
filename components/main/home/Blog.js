import Image from "next/image";
import Style from "./style.module.css";

export default function Blog() {
  return (
    <section className={Style.blog}>
      <div>
        <div>
          <span>BLOG</span>
          <h2>It's all about what you love the most...</h2>
          <p>
            We are a boutique brand and online store that specialises in all
            kinds of items for kids. Our goal is to help children grow and feel
            comfortable in a world full of play, freedom, and fun. We are
            dedicated to helping children of all ages enjoy the things that they
            love most. At the end of the day, we are about making the world a
            better place.
          </p>
          <span className={Style.btn}>READ</span>
        </div>
      </div>
      <div>
        <Image
          src="/home/blog.jpg"
          width={400}
          height={400}
          objectFit="cover"
          layout="responsive"
        />
      </div>
    </section>
  );
}
