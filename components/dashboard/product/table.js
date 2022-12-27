import Style from "./table.module.css";
import { useRouter } from "next/router";
import axios from "axios";

function Table({ data, DeleteProduct }) {
  console.log("data");
  console.log(data);
  const router = useRouter();
  return (
    <table className={Style.table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Weight</th>
          <th>Created At</th>
          <th>Slug</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          let createdAt = new Date(item.createdAt).toLocaleDateString("en-EG", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });
          return (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.stock}</td>
              <td>{item.weight}</td>
              <td>{createdAt}</td>
              <td>{item.slug}</td>
              <td>
                <button
                  className={Style.update}
                  onClick={(e) => {
                    router.push({
                      pathname: "/dashboard/product/update",
                      query: item,
                    });
                  }}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className={Style.delete}
                  onClick={() => {
                    let confirmation = confirm(
                      "Do you want to delete " + item.title
                    );
                    if (confirmation) DeleteProduct(item.slug);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
