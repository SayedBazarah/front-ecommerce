import React from "react";
import Link from "next/link";

function index() {
  return (
    <div>
      <h2>Easy Access Links</h2>
      <div>
        <Link href="/product/new">New Product</Link>
        <Link href="/category/new">New Category</Link>
        <Link href="/admin/new">New Admin</Link>
      </div>
    </div>
  );
}

export default index;
