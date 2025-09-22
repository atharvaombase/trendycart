import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  ShoppingBag,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { addToCart } from "../store/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const product = products.find((p) => p._id === id);

  const [selectedImage, setSelectedImage] = useState(product?.images[0]?.url);

  const [cartItem, setCartItem] = useState(false);

  const handleAddToCart = () => {
    setCartItem(true);
    dispatch(addToCart(product));
  };

  const handleBuyNow = () => {
    dispatch(addToCart(product));
    // Add navigation to checkout here
  };

  if (!product) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-center text-red-500 text-lg">Product not found!</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 pb-16">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side - Image Gallery */}
        <div className="w-full md:w-1/2">
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="aspect-square overflow-hidden rounded-xl">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {product.images.map((img, index) => (
              <button
                key={index}
                className={`relative rounded-lg overflow-hidden aspect-square ${
                  selectedImage === img.url ? "ring-2 ring-indigo-500" : ""
                }`}
                onClick={() => setSelectedImage(img.url)}
              >
                <img
                  src={img.url}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              {product.category.toUpperCase()}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <span className="text-yellow-400 text-xl">★</span>
                <span className="ml-1 text-gray-700">{product.ratings}</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">
                {product.numOfReviews} Reviews
              </span>
            </div>
          </div>

          <div className="border-t border-b py-6">
            <div className="text-3xl font-bold text-gray-900 mb-4">
              ₹{product.price.toLocaleString()}
            </div>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.stock > 0
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </div>
            {product.stock > 0 && (
              <span className="text-gray-600 text-sm">
                ({product.stock} units available)
              </span>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <button
                onClick={handleBuyNow}
                disabled={product.stock === 0}
                className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingBag className="w-5 h-5" />
                Buy Now
              </button>
              {setCartItem ? (
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              ) : (
                <button className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  Added to Cart
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="text-center">
              <Truck className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <p className="text-sm text-gray-600">Free Delivery</p>
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <p className="text-sm text-gray-600">Secure Payment</p>
            </div>
            <div className="text-center">
              <RotateCcw className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <p className="text-sm text-gray-600">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
