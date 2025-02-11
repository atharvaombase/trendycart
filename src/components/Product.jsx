import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, deleteItem } from "../store/cartSlice"; // Updated import

const Product = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnBuy = (item) => {
    if (!item || !item._id) {
      console.error("Product item is invalid", item);
      return;
    }
    // Pass the full item object to addToCart
    dispatch(addToCart(item));
  };

  const handleOnAddToCart = (item) => {
    console.log("Adding to cart:", item); // Add this line
    // Pass the full item object to addToCart
    dispatch(addToCart(item));
  };

  const handleOnOpen = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div key={item._id} className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer"
          src={item.images[0]?.url || "https://via.placeholder.com/150"}
          alt={item.name}
          onClick={() => handleOnOpen(item._id)}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {item.category.toUpperCase()}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {item.name}
          </h1>
          <p className="leading-relaxed mb-3">
            {item.description.length > 100
              ? `${item.description.substring(0, 100)}...`
              : item.description}
          </p>
          <p className="text-lg font-semibold text-gray-900 mb-2">
            ₹{item.price}
          </p>
          <div className="flex items-center flex-wrap">
            <div>
              <button
                className="bg-zinc-700 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
                onClick={() => handleOnBuy(item)}
              >
                Buy Now
              </button>
            </div>
            <button
              className="ml-2 text-indigo-500 border border-indigo-500 py-2 px-4 rounded text-sm hover:bg-indigo-100"
              onClick={() => handleOnAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
