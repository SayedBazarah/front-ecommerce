import Link from "next/link";
import Image from "next/image";
import Style from "./hero.module.css";

const Hero = ({ title, img }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className={Style.container}
    >
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
