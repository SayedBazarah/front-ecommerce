import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Update from "../../../components/dashboard/product/update";
import axios from "axios";

function UpdateProduct() {
  const router = useRouter();
  const product = router.query;
  const UPDATE_URL = `/product/${product.slug}`;
  console.log(product.slug);
  async function submitProduct(product) {
    try {
      await axios.put(UPDATE_URL, product, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      router.push("/dashboard/product");
    } catch (err) {
      console.log(err);
    }
  }
  return <Update product={product} updateProduct={submitProduct} />;
}

export default UpdateProduct;
