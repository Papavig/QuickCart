import React, { useState, useEffect } from "react";
import { ProductService } from "@/Api/ProductService";
import { Product } from "@/Model/ProductModel";

function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    category: "",
    stock_quantity: 0,
    description: "",
    image_url: "",
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await ProductService.getAllProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update product
        await ProductService.updateProduct(editingId, formData);
      } else {
        // Add new product
        await ProductService.addProduct(formData);
      }
      // Reset the form and refetch products
      setFormData({
        id: 0,
        name: "",
        price: 0,
        category: "",
        stock_quantity: 0,
        description: "",
        image_url: "",
      });
      setEditingId(null);
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  // Handle edit button click
  const handleEdit = (product: Product) => {
    setFormData(product);
    setEditingId(product.id);
  };

  // Handle delete button click
  const handleDelete = async (productId: number) => {
    try {
      await ProductService.deleteProduct(productId);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <form onSubmit={handleSubmit} className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Edit Product" : "Add New Product"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name">Product Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={handleInputChange}
              required
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <input
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label htmlFor="stock_quantity">Stock Quantity</label>
            <input
              id="stock_quantity"
              name="stock_quantity"
              type="number"
              value={formData.stock_quantity}
              onChange={handleInputChange}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="image_url">Image URL</label>
            <input
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleInputChange}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Stock</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border">{product.id}</td>
                <td className="py-2 px-4 border">{product.name}</td>
                <td className="py-2 px-4 border">₹{product.price}</td>
                <td className="py-2 px-4 border">{product.category}</td>
                <td className="py-2 px-4 border">{product.stock_quantity}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-2 py-1 mr-2 bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
