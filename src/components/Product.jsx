import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { ShoppingCart, ShoppingBag } from "lucide-react";

const Product = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnBuy = (item) => {
    if (!item || !item._id) {
      console.error("Product item is invalid", item);
      return;
    }
    dispatch(addToCart(item));
  };

  const handleOnAddToCart = (item) => {
    console.log("Adding to cart:", item);
    dispatch(addToCart(item));
  };

  const handleOnOpen = (id) => {
    navigate(`/product/${id}`);
  };

  console.log(item);

  return (
    <div className="p-4 md:w-1/3">
      <div className="group h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            src={item.images[0]?.url || "/api/placeholder/400/400"}
            alt={item.name}
            onClick={() => handleOnOpen(item._id)}
          />
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              {item.category.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {item.name}
            </h1>
            <p className="text-gray-600 text-sm line-clamp-2">
              {item.description}
            </p>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-gray-900">
              ₹{item.price.toLocaleString()}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleOnBuy(item)}
              className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
              <ShoppingBag className="w-4 h-4" />
              Buy Now
            </button>
            <button
              onClick={() => handleOnAddToCart(item)}
              className="flex items-center justify-center gap-2 text-indigo-600 border-2 border-indigo-600 py-2.5 px-4 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
