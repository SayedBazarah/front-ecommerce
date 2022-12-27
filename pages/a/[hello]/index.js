import CategoryPage from "../../components/store/category";
import { useRouter } from "next/router";
function Category() {
  const router = useRouter();
  return <CategoryPage title={router.query.category} />;
}

export default Category;
