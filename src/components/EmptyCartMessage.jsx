import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyCartMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 px-4">
      <div className="bg-gray-50 rounded-full p-8 mb-6">
        <ShoppingCart size={64} className="text-gray-400" />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Your cart is empty
      </h2>

      <p className="text-gray-500 text-center mb-8 max-w-md">
        Looks like you haven't added anything to your cart yet. Explore our
        products and find something you'll love!
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
      >
        Start Shopping
        <ArrowRight size={20} />
      </Link>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 mb-2">Free Shipping</h3>
          <p className="text-sm text-gray-500">On orders over Rs. 999</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 mb-2">Secure Payment</h3>
          <p className="text-sm text-gray-500">100% secure checkout</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 mb-2">24/7 Support</h3>
          <p className="text-sm text-gray-500">Here to help anytime</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCartMessage;
