import Link from "next/link";
import Image from "next/image";
import Style from "./hero.module.css";

const Hero = ({ title, img, color }) => {
  return (
    <div className={Style.container}>
      <Image
        src={img}
        alt="contact us image"
        width={1366}
        height={600}
        layout="responsive"
        objectFit="cover"
      />
      <div style={{ color: color }}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
