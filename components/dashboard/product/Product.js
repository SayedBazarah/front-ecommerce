import Style from "./new.module.css";

function Product() {
  function newProduct(e) {
    e.preventDefault();
    let product = {};
    for (let item of e.target) {
      if (item.type !== "submit") product[item.name] = item.value;
    }
    console.log(product);
  }
  return (
    <div className={Style.container}>
      <h1>New Product</h1>
      <form onSubmit={newProduct}>
        <div className={Style.basicInfo}>
          <h2>Basics Info</h2>
          <div>
            <div>Title</div>
            <input required type="text" placeholder="T-Shirt" name="title" />
          </div>

          <div>
            <div>Price</div>
            <input
              required
              type="number"
              step="0.01"
              placeholder="9.99"
              name="price"
            />
          </div>
          <div>
            <div>Weight</div>
            <input
              required
              type="number"
              step="0.01"
              placeholder="1.2"
              name="weight"
            />
          </div>

          <div>
            <div>Category</div>
            <input required type="text" placeholder="Top" name="category" />
          </div>
          <div>
            <div>Stock</div>
            <input required type="text" placeholder="25" name="stock" />
          </div>
          <div>
            <div>Description</div>
            <input
              required
              type="text"
              placeholder="High Qualit Product"
              name="description"
            />
          </div>
          <div>
            <div>Thumbnail</div>
            <input
              required
              type="file"
              name="thumbnail"
              accept=".png, .jpg, .jpeg"
            />
          </div>
          <div>
            <div>images</div>
            <input
              required
              multiple
              type="file"
              name="thumbnail"
              accept=".png, .jpg, .jpeg"
            />
          </div>
        </div>
        <div className={Style.basicInfo}>
          <h2>Search Engine Info</h2>
          <div>
            <div>Meta Title</div>
            <input
              required
              type="text"
              placeholder="summer t-shirt"
              name="meta-title"
            />
          </div>
          <div>
            <div>Meta Description</div>
            <input
              required
              type="text"
              placeholder="a nice summer t-shirt"
              name="meta-description"
            />
          </div>
          <div>
            <div>Slug</div>
            <input required type="text" placeholder="t-shirt" name="slug" />
          </div>
          <input className={Style.btn} type="submit" value="New Product" />
        </div>
      </form>
    </div>
  );
}

export default Product;
