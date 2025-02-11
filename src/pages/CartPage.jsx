import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCartMessage from "../components/EmptyCartMessage";
import { decrementItem, deleteItem, incrementItem } from "../store/cartSlice";

const CartPage = () => {
  // Get all products from the Redux store.
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  console.log(
    "wef",
    useSelector((store) => store.cart)
  );
  // Check if 'item' exists and is an array.
  // Then filter products: only keep products whose _id is in the 'item' array.

  const handleOnRemove = (id) => {
    dispatch(deleteItem(id));
  };
  const handleOnIncrement = (id) => {
    dispatch(incrementItem(id));
  };
  const handleOnDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  // Calculate totals using the cartItems.
  const subtotal = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax.
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-2xl font-bold mb-8">Your Cart</h1> */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* If there are items in the cart, list them; otherwise, show an empty state icon */}
        <div className="md:col-span-2">
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <div
                key={product._id}
                className="flex items-center gap-4 py-4 border-b"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <h2 className="font-semibold">{product.name}</h2>
                  <p className="text-sm text-gray-500">
                    Rs. {product.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-l"
                    onClick={() => {
                      handleOnDecrement(product._id);
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={product.quantity}
                    className="w-16 h-8 text-center border border-gray-300 rounded"
                  />
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-r"
                    onClick={() => {
                      handleOnIncrement(product._id);
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => {
                    handleOnRemove(product._id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center py-8">
              {/* <FaBatteryEmpty size={40} /> */}
              <EmptyCartMessage></EmptyCartMessage>
              {/* <span className="ml-4 text-gray-500">Your cart is empty!</span> */}
            </div>
          )}
        </div>

        {/* Order Summary Section */}
        <div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>Rs. {tax.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>Rs. {total.toFixed(2)}</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
