"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/Context";
import { useRouter } from "next/navigation";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const router = useRouter();

  // Calculate the total price of the cart
  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleQuantityChange = (id: string, quantity: string) => {
    const parsedQuantity = Math.max(1, parseInt(quantity) || 1); // Ensure quantity is a number >= 1
    updateQuantity(id, parsedQuantity);
  };

  const handleProceedToCheckout = () => {
    // Store cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/checkout");
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="mt-4 text-lg text-gray-500">Start shopping to add items to your cart!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-extrabold text-[#2A254B] mb-6">Your Cart</h1>

        <div className="space-y-8">
          {cart.map((item:any) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-center space-x-6">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="text-xl font-semibold text-[#2A254B]">{item.name}</p>
                  <p className="text-sm text-gray-500">£{item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-4 py-2 rounded-full bg-[#F0F0F0] hover:bg-[#CAC6DA] text-[#2A254B] text-lg"
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  className="w-16 text-center border-2 border-[#D1D5DB] rounded-lg py-2 text-lg font-medium text-[#2A254B] focus:outline-none focus:border-[#A78BFA]"
                />
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-4 py-2 rounded-full bg-[#F0F0F0] hover:bg-[#CAC6DA] text-[#2A254B] text-lg"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 font-semibold hover:text-red-800 transition-all duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-xl font-bold text-[#2A254B]">Total: £{totalPrice.toFixed(2)}</p>
            <button
              onClick={handleProceedToCheckout}
              className="px-8 py-3 bg-[#2A254B] text-white font-semibold rounded-lg hover:bg-[#1E1B3D] transition-all duration-300 mt-4 md:mt-0"
            >
              Proceed to Checkout
            </button>
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={clearCart}
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-200"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
