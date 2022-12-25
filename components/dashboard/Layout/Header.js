import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Style from "./Header.module.css";

export default function Header() {
  const router = useRouter();
  return (
    <nav className={Style.container}>
      <div>
        <h2>ECOMMERCE</h2>
      </div>
      <div
        onClick={() => {
          localStorage.setItem("token", "");
          router.push("/");
        }}
        className={Style.profile}
      >
        <p>Log out</p>
      </div>
    </nav>
  );
}
