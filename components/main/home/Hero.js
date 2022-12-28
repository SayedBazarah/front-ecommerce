import Image from "next/image";
import { useRouter } from "next/router";
import Style from "./hero.module.css";

export default function Hero() {
  const router = useRouter();
  return (
    <section>
      <div className={Style.container}>
        <div className={Style.img}>
          <Image
            src="/home/home-hero.avif"
            alt="contact us image"
            width={1366}
            height={600}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={Style.txt}>
          <h2>New Collection</h2>
          <p>
            We want you to feel comfortable, loved and free. Our organic and
            fairtrade clothing ensures that your baby can play and be happy.
          </p>
          <div className={Style.btn} onClick={() => router.push("/store")}>
            Shop Now
          </div>
        </div>
      </div>
    </section>
  );
}
