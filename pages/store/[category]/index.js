import CategoryPage from "../../../components/main/store/category";
import axios from "axios";

function Category({ path, products }) {
  return <CategoryPage title={path} products={products} />;
}

export default Category;

export async function getStaticProps(context) {
  let category = context.params.category;
  const API_URL = `/product/category/${category}`;
  console.log(API_URL);
  try {
    let response = await axios.get(API_URL);
    return {
      props: { path: category, products: response.data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { path: category },
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: "kids" } },
      { params: { category: "women" } },
      { params: { category: "men" } },
    ],
    fallback: false,
  };
}
