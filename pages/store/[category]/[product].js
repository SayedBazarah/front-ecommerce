import ProductPage from "../../../components/main/store/ProductPage";
import { useRouter } from "next/router";
import axios from "axios";
function Product({ product }) {
  return <ProductPage product={product} />;
}

export default Product;

export async function getStaticProps(context) {
  const API_URL = `/product/${context.params.product}`;
  try {
    let response = await axios.get(API_URL);
    return {
      props: { product: response.data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { path: category },
    };
  }
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  let paths = [];
  try {
    const response = await axios("/product/slugs");
    for (let item of response.data)
      paths.push({ params: { category: item.category, product: item.slug } });
  } catch (error) {
    console.log(error);
  }
  return {
    paths: paths,
    fallback: true,
  };
}
