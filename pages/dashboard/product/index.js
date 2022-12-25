import Products from "../../../components/dashboard/product";
import axios from "axios";
export default function Product() {
  let products = [];
  return <Products products={products} />;
}

// export async function getStaticProps() {
//   //const res = await axios.get("/product");
//   return {
//     props: { products: res.data },
//   };
// }
