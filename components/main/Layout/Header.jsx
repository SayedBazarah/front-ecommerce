import Link from "next/link";
import Image from "next/image";
import Style from "./header.module.css";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../../context/AuthProvider";
import jwt from "jwt-decode";
function Header() {
  const { cart } = useContext(AuthContext);
  const [bg, setBg] = useState(false);
  const [shadow, setShadow] = useState(false);
  let route = useRouter();
  const [status, setStatus] = useState(false);

  const router = route.pathname;
  const handleScroll = () => {
    if (window.scrollY == 0) setShadow(true);
    else setShadow(false);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) setStatus(true);
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
                href="/contacts"
                className={router == "/contacts" ? Style.active : null}
                onClick={() => setBg(false)}
              >
                Contacts
              </Link>
            </li>
            <li>
              {status ? (
                <Link
                  href="/"
                  className={router == "/login" ? Style.active : null}
                  onClick={() => {
                    localStorage.setItem("token", "");
                    route.reload();
                  }}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  href="/login"
                  className={router == "/login" ? Style.active : null}
                  onClick={() => setBg(false)}
                >
                  Login
                </Link>
              )}
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
              <div>{cart.length}</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
