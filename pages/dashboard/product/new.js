import Product from "../../../components/dashboard/product/Product";
import axios from "axios";

function New() {
  function submitProduct(data) {
    axios.post("/product", {});
  }
  return <Product APICall={submitProduct} />;
}

export default New;
