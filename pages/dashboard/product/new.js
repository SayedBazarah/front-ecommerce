import Product from "../../../components/dashboard/product/Product";
import axios from "axios";
import { useRouter } from "next/router";
const PRODUCT_URL = "/product";

function New() {
  const router = useRouter();
  async function submitProduct(product) {
    try {
      console.log("request");
      let response = await axios.post(PRODUCT_URL, product, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      console.log(response);
      router.push("/dashboard/product");
    } catch (err) {
      console.log(err);
    }
  }
  return <Product APICall={submitProduct} />;
}

export default New;
