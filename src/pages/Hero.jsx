import React from "react";
import { ShoppingBag, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-5 py-24 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold mb-4">
              Welcome to Trendy Cart
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Trendy Cart brings you the{" "}
              <span className="text-indigo-600">best products</span> possible
            </h1>
          </div>

          <p className="text-lg text-gray-600">
            Trendy Cart is an e-commerce website that offers a wide range of
            products, including trendy clothing, electronics, home goods, and
            more. Designed to be user-friendly, it ensures a seamless shopping
            experience.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="group flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Shop Now
            </button>

            <button className="group relative flex items-center gap-2 border-2 border-gray-300 px-6 py-3 rounded-lg text-lg text-gray-700 overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <BookOpen className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" />
              <span className="relative z-10">Learn More</span>
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">10K+</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">8K+</div>
              <div className="text-sm text-gray-600">Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">4.9</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>

        {/* Image */}
        {/* Removed ml-64 to avoid forced large left margin */}
        <div className="md:w-1/2 flex justify-center mb-12 md:mb-0">
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-100 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src="./vite.svg"
              alt="Trendy Cart"
              className="w-3/4 md:w-full max-w-md relative animate-float"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
