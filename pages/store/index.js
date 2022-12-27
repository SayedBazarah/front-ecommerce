import StoreComponents from "../../components/main/store";
import axios from "axios";
function Store({ data }) {
  return <StoreComponents products={data} />;
}

export default Store;

export async function getStaticProps() {
  try {
    const res = await axios.get("/product/simple");
    return {
      props: { data: res.data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}
