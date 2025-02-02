"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/Context";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const CartPage: React.FC = () => {
  const { cartItems, setCartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    // Load cart items from localStorage
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, [setCartItems]);

  useEffect(() => {
    // Calculate total price
    const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setTotalPrice(total);

    // Save cart items to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleProceedToCheckout = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    router.push("/checkout");
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="mt-4 text-lg text-gray-500">Start shopping to add items to your cart!</p>
        <Link href={"/product"} className="border px-4 py-2 my-2 rounded-lg shadow-lg">Select Products</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2A254B] mb-6 text-center">Your Cart</h1>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.product._id}
              className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4 md:p-6"
            >
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <Image
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="text-lg md:text-xl font-semibold text-[#2A254B]">{item.product.name}</p>
                  <p className="text-sm text-gray-500">£{item.product.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 md:space-x-4 mt-4 md:mt-0">
                <button
                  onClick={() => decreaseQuantity(item.product._id)}
                  className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300 disabled:opacity-50"
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <p className="text-lg font-semibold">{item.quantity}</p>
                <button
                  onClick={() => increaseQuantity(item.product._id)}
                  className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.product._id)}
                  className="bg-red-500 text-white hover:bg-red-700 text-sm border p-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center md:text-right">
          <p className="text-lg md:text-xl font-semibold text-[#2A254B]">Total: £{totalPrice.toFixed(2)}</p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-end">
          <button
            onClick={handleProceedToCheckout}
            className="bg-[#2A254B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E1B3D] transition-all duration-300"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={() => {
              clearCart();
              localStorage.removeItem("cartItems");
            }}
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
