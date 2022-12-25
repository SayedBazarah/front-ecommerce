import Link from "next/link";
import Image from "next/image";
import Style from "./SideNav.module.css";

export default function SideNav() {
  return (
    <ul className={Style.container}>
      <li>
        <div>
          <Image alt="icon" src="/icons/home.svg" width={30} height={30} />
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </li>
      <li>
        <div>
          <Image alt="icon" src="/icons/account.svg" width={30} height={30} />
          <Link href="/dashboard/account">Account Settings</Link>
        </div>
      </li>
      <Sparator title="Pages" />
      <li>
        <div>
          <Image alt="icon" src="/icons/page.svg" width={30} height={30} />
          <Link href="/dashboard/product">Products</Link>
        </div>
      </li>
      <li>
        <div>
          <Image alt="icon" src="/icons/category.svg" width={30} height={30} />
          <Link href="/dashboard/category">Categories</Link>
        </div>
      </li>
      <li>
        <div>
          <Image alt="icon" src="/icons/list.svg" width={30} height={30} />
          <Link href="/dashboard/order">Orders</Link>
        </div>
      </li>
    </ul>
  );
}

function Sparator({ title }) {
  return (
    <div className={Style.divider}>
      <div></div>
      <h3>{title}</h3>
      <div></div>
    </div>
  );
}
