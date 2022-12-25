import React from "react";
import Style from "./table.module.css";
function Table({ data }) {
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
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.stock}</td>
            <td>{item.weight}</td>
            <td>{item["create-date"]}</td>
            <td>{item.slug}</td>
            <td>
              <button className={Style.update}>Update</button>
            </td>
            <td>
              <button className={Style.delete}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
