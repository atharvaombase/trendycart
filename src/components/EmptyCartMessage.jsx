import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const EmptyCartMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <FaShoppingCart className="w-20 h-20 text-gray-300 mb-6 animate-bounce" />
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        Your Cart is Empty!
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! Looks like you haven't added anything to your cart yet.
      </p>
    </div>
  );
};

export default EmptyCartMessage;
