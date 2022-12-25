import Link from "next/link";
import Table from "./table";
import Style from "./product.module.css";
import { useRouter } from "next/router";

function Products({ products }) {
  const router = useRouter();
  return (
    <div className={Style.container}>
      <h1>Products</h1>

      <div
        onClick={() => {
          router.push("/dashboard/product/new");
        }}
        className={Style.btn}
      >
        New Product
      </div>

      <Table data={products} />
    </div>
  );
}

export default Products;
