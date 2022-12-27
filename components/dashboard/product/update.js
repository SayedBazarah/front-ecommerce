import Style from "./new.module.css";
import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";

function Update({ product, updateProduct }) {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [weight, setWeight] = useState();
  const [category, setCategory] = useState();
  const [stock, setStock] = useState();
  const [description, setDescription] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [images, setImages] = useState();
  const [metaTitle, setMetaTitle] = useState();
  const [metaDescription, setMetaDescription] = useState();
  const [slug, setSlug] = useState();

  useEffect(() => {
    setTitle(product.title);
    setPrice(product.price);
    setWeight(product.weight);
    setCategory(product.category);
    setStock(product.stock);
    setDescription(product.description);
    setMetaTitle(product["meta-title"]);
    setMetaDescription(product["meta-description"]);
    setSlug(product.slug);
  }, []);

  function newProduct(e) {
    e.preventDefault();
    let product = {};

    for (let item of e.target) {
      if (item.type !== "submit" && item.type !== "file")
        product[item.name] = item.value;
    }
    product["thumbnail"] = thumbnail;
    product["images"] = images;
    updateProduct(product);
  }
  return (
    <div className={Style.container}>
      <h1>Update Product</h1>
      <form onSubmit={newProduct}>
        <div className={Style.basicInfo}>
          <h2>Basics Info</h2>
          <div>
            <div>Title</div>
            <input
              required
              type="text"
              placeholder="T-Shirt"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div>
            <div>Price</div>
            <input
              required
              type="number"
              step="0.01"
              placeholder="9.99"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
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
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </div>

          <div>
            <div>Category</div>
            <input
              required
              type="text"
              placeholder="Top"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
          </div>
          <div>
            <div>Stock</div>
            <input
              required
              type="number"
              placeholder="25"
              name="stock"
              onChange={(e) => setStock(e.target.value)}
              value={stock}
            />
          </div>
          <div>
            <div>Description</div>
            <input
              required
              type="text"
              placeholder="High Qualit Product"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div>
            <div>Thumbnail</div>
            <FileBase64
              accept=".png, .jpg, .jpeg"
              multiple={false}
              onDone={({ base64 }) => {
                setThumbnail(base64);
              }}
            />
          </div>
          <div>
            <div>images</div>
            <FileBase64
              accept=".png, .jpg, .jpeg"
              multiple={true}
              onDone={(imgs) => {
                let data = [];
                for (let img of imgs) data.push(img.base64);
                setImages(data);
              }}
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
              onChange={(e) => setMetaTitle(e.target.value)}
              value={metaTitle}
            />
          </div>
          <div>
            <div>Meta Description</div>
            <input
              required
              type="text"
              placeholder="a nice summer t-shirt"
              name="meta-description"
              onChange={(e) => setMetaDescription(e.target.value)}
              value={metaDescription}
            />
          </div>
          <div>
            <div>Slug</div>
            <input
              required
              type="text"
              placeholder="t-shirt"
              name="slug"
              onChange={(e) => setSlug(e.target.value)}
              value={slug}
            />
          </div>
          <input className={Style.btn} type="submit" value="New Product" />
        </div>
      </form>
    </div>
  );
}

export default Update;
