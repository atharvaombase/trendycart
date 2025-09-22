import React, { useState } from "react";
import DropzoneComponent from "../components/DropzoneComponent";

const Admin = () => {
  // Form fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ratings, setRatings] = useState(0);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState([]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("ratings", ratings);
    formData.append("category", category);
    formData.append("stock", stock);

    // Append images
    images.forEach((file) => {
      formData.append("images", file);
    });

    try {
      // Example: send to your backend
      const response = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to create product");
      }
      // Clear form on success
      setName("");
      setDescription("");
      setPrice("");
      setRatings(0);
      setCategory("");
      setStock("");
      setImages([]);
      console.log("Product created successfully");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="min-h-screen min bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Add New Product
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm p-2
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                         dark:bg-gray-700 dark:text-gray-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              placeholder="Describe the product"
              rows={4}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm p-2
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                         dark:bg-gray-700 dark:text-gray-100"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter product price"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm p-2
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                         dark:bg-gray-700 dark:text-gray-100"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          {/* Ratings */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Ratings
            </label>
            <input
              type="number"
              min={0}
              max={5}
              step={0.5}
              placeholder="Rate out of 5"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm p-2
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                         dark:bg-gray-700 dark:text-gray-100"
              value={ratings}
              onChange={(e) => setRatings(e.target.value)}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <input
              type="text"
              placeholder="e.g., electronics, food, clothing"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm p-2
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                         dark:bg-gray-700 dark:text-gray-100"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Stock
            </label>
            <input
              type="number"
              placeholder="Number of items in stock"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm p-2
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                         dark:bg-gray-700 dark:text-gray-100"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          {/* Images (Dropzone) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Images
            </label>
            <DropzoneComponent
              onDropAccepted={(acceptedFiles) => {
                setImages((prev) => [...prev, ...acceptedFiles]);
              }}
            />
            {/* Preview selected images */}
            {images.length > 0 && (
              <ul className="mt-2 space-y-1">
                {images.map((file, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 dark:text-gray-200"
                  >
                    {file.name} ({Math.round(file.size / 1024)} KB)
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md
                       hover:bg-indigo-700 transition-colors focus:outline-none
                       focus:ring-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
