import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((p) => p._id === id);

  const [selectedImage, setSelectedImage] = useState(product?.images[0]?.url);

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row gap-8 p-4">
      {/* Left Side - Image Gallery */}
      <div className="w-full md:w-1/2">
        <div className="border border-gray-300 rounded-lg p-4">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="flex gap-2 mt-4">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt={product.name}
              className={`w-20 h-20 object-cover rounded-lg border ${
                selectedImage === img.url
                  ? "border-indigo-500"
                  : "border-gray-300"
              } cursor-pointer`}
              onClick={() => setSelectedImage(img.url)}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 text-lg">{product.description}</p>

        <p className="text-xl font-semibold text-green-600">₹{product.price}</p>

        <p className="text-gray-500 text-sm">
          ⭐ {product.ratings} | {product.numOfReviews} Reviews
        </p>

        <p
          className={`text-sm font-semibold ${
            product.stock > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        <div className="flex items-center gap-4 mt-4">
          <div>
            <button
              className="bg-zinc-700 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
              onClick={() => handleOnBuy(itemId)}
            >
              Buy Now
            </button>
          </div>
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
