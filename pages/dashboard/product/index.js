import Link from "next/link";
import Table from "../../../components/dashboard/product/table";
import Style from "../../../components/dashboard/product/product.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Product({ data }) {
  const [products, setProducts] = useState();
  useEffect(() => {
    setProducts(data);
  }, [data]);

  const router = useRouter();

  async function DeleteProduct(slug) {
    try {
      await axios.delete(`/product/${slug}`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      //Update State
      let newData = products;
      newData = newData.filter((item) => item.slug !== slug);
      setProducts(newData);
    } catch (error) {
      console.log(error);
    }
  }
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
      {products && <Table data={products} DeleteProduct={DeleteProduct} />}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get("/product/simple");
    return {
      props: { data: res.data },
    };
  } catch (error) {
    console.log(error);
  }
}
