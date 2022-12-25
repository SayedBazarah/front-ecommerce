import Link from "next/link";
import Image from "next/image";
import Style from "./header.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [bg, setBg] = useState(false);
  const [shadow, setShadow] = useState(false);
  let route = useRouter();

  const router = route.pathname;
  const handleScroll = () => {
    if (window.scrollY == 0) setShadow(true);
    else setShadow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={shadow ? Style.noShadow : Style.shadow}>
      <nav className={Style.container} onScroll={handleScroll}>
        <div className={Style.logo}>
          <div className={Style.burger} onClick={() => setBg(!bg)}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
          <div className={Style.logo} onClick={() => route.push("/")}>
            ECOMMERCE
          </div>
        </div>
        <div className={Style.nav}>
          <div className={bg ? Style.bg : Style.list}>
            <li>
              <Link
                href="/"
                className={router == "/" ? Style.active : null}
                onClick={() => setBg(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/store"
                className={router == "/store" ? Style.active : null}
                onClick={() => setBg(false)}
              >
                Store
              </Link>
            </li>
            <li>
              <Link
                href="/baby-care"
                className={router == "/baby-care" ? Style.active : null}
                onClick={() => setBg(false)}
              >
                Baby Care
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={router == "/contacts" ? Style.active : null}
                onClick={() => setBg(false)}
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className={router == "/login" ? Style.active : null}
                onClick={() => setBg(false)}
              >
                Login
              </Link>
            </li>
          </div>

          <div className={Style.cart}>
            <div className={Style.bag} onClick={() => route.push("/cart")}>
              <Image
                src="/icons/bag.png"
                alt="shopping bag"
                width={25}
                height={25}
              />
              <div>{cartCount}</div>
            </div>
            <div onClick={() => route.push("/search")}>
              <svg
                height="17"
                width="24"
                viewBox="0 0 24 17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor" fillRule="nonzero">
                  <path d="M19.121 12.864a.5.5 0 0 1 .707-.707l4 4a.5.5 0 0 1-.707.707l-4-4z"></path>
                  <path d="M14.5 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0 1a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM5.5 1a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zM4.5 9a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h4zM5.5 13a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1h5zM4.5 5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h4z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
