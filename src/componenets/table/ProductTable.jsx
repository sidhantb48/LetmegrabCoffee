import { useState, useEffect } from "react";
import axios from "axios";

import "./ProductTable.css"; // Import the CSS file

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isViewPopupOpen, setIsViewPopupOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openPopup = (product) => {
    setSelectedProduct(product);
    setIsViewPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedProduct(null);
    setIsViewPopupOpen(false);
  };

  // ...

  const handleUpdate = (product) => {
    const updatedProduct = { ...product };
    const updatedTitle = prompt("Enter the updated title:", product.title);
    const updatedPrice = prompt("Enter the updated price:", product.price);
    const updatedDescription = prompt(
      "Enter the updated description:",
      product.description
    );

    updatedProduct.title = updatedTitle || product.title;
    updatedProduct.price = updatedPrice
      ? parseFloat(updatedPrice)
      : product.price;
    updatedProduct.description = updatedDescription || product.description;

    const updatedProducts = products.map((p) =>
      p.id === product.id ? updatedProduct : p
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    setSelectedProduct(updatedProduct); // Update the selectedProduct state with the updated product
    alert("Product updated successfully!");
  };

  const handleDelete = (product) => {
    console.log("Delete:", product);
    const updatedProducts = products.filter((p) => p.id !== product.id);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    alert("Product deleted successfully!");
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    filterProducts(searchTerm, selectedCategory);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterProducts(searchTerm, category);
  };

  const filterProducts = (searchTerm, category) => {
    let filtered = products;
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (category) {
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }
    setFilteredProducts(filtered);
  };

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th>Product Title</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Product Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <u>{product.title}</u>
              </td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>
                <button onClick={() => openPopup(product)}>View</button>
                <button onClick={() => handleUpdate(product)}>Update</button>
                <button onClick={() => handleDelete(product)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isViewPopupOpen && selectedProduct && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <p>Price: {selectedProduct.price}</p>
            <p className="description">
              Description: {selectedProduct.description}
            </p>
            <p>Category: {selectedProduct.category}</p>
            <p>Rating: {selectedProduct.rating.rate}</p>
            <p>Count: {selectedProduct.rating.count}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
