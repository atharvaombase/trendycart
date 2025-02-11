const Hero = () => {
  return (
    <section className="container mx-auto px-5 py-24 flex flex-col-reverse md:flex-row items-center">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Trendy Cart brings you the best products possible
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Trendy Cart is an e-commerce website that offers a wide range of
          products, including trendy clothing, electronics, home goods, and
          more. Designed to be user-friendly, it ensures a seamless shopping
          experience.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-700 transition">
            Shop Now
          </button>
          <button className="border border-gray-400 px-6 py-3 rounded-lg text-lg text-gray-700 hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="vite.svg"
          alt="Trendy Cart"
          className="w-3/4 md:w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default Hero;
