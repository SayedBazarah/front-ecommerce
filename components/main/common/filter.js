import Image from "next/image";
import Link from "next/link";
import Style from "./filter.module.css";

const Filter = () => {
  return (
    <section className={Style.container}>
      <div>
        <Link href="/search" className={Style.btn}>
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
          <span>Search Products</span>
        </Link>
      </div>
      <div>
        <Link href="/cart" className={Style.btn}>
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1 5v13.006c0 .548.446.994.994.994h12.012c.548 0 .994-.446.994-.994V5H1zm15-1v14.006c0 1.1-.895 1.994-1.994 1.994H1.994C.894 20 0 19.105 0 18.006V4h16z"
                fill="currentColor"
                fillRule="nonzero"
              ></path>
              <path
                d="M5 7s-.005.5-.504.5C3.996 7.5 4 7 4 7V4c0-2.21 1.79-4 4-4s4 1.79 4 4v3s-.002.5-.5.5S11 7 11 7V4c0-1.657-1.343-3-3-3S5 2.343 5 4v3z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <span>Shopping Bag</span>
        </Link>
      </div>
    </section>
  );
};

export default Filter;
