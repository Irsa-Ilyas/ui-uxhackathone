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

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/producttype";
import {
  getCartItems,
  updateCartQuantity,
  removeFromCart,
} from "../actions/acions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCart = () => {
      const items = getCartItems();
      setCartItems(items);
    };
    fetchCart();
  }, []);

  const refreshCart = () => {
    setCartItems(getCartItems());
  };

  const handleRemove = (id: string) => {
    const isConfirmed = window.confirm(
      "Are you sure? You want to remove this item!"
    );
    if (isConfirmed) {
      removeFromCart(id);
      refreshCart();
      alert("Item has been removed from your cart.");
    }
  };

  const handleIncrement = (id: string) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, inventory: item.inventory + 1 } : item
      )
    );

    const foundItem = cartItems.find((item) => item._id === id);
    if (foundItem) {
      updateCartQuantity(id, foundItem.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item._id === id && item.inventory > 1
          ? { ...item, inventory: item.inventory - 1 }
          : item
      )
    );

    const foundItem = cartItems.find((item) => item._id === id);
    if (foundItem && foundItem.inventory > 1) {
      updateCartQuantity(id, foundItem.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  const handleProceed = () => {
    const isConfirmed = window.confirm(
      "Do you want to proceed with your order?"
    );
    if (isConfirmed) {
      alert("Your order has been successfully processed!");
      router.push("/checkout");
      setCartItems([]);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg"
            >
              <div className="flex items-center">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="object-cover rounded-md mr-4"
                  />
                )}
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleDecrement(item._id)}
                  className="bg-gray-300 p-2 rounded-full text-xl"
                >
                  -
                </button>
                <span>{item.inventory}</span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="bg-gray-300 p-2 rounded-full text-xl"

                >
                  +
                </button>
                <button

                  onClick={() => removeFromCart(item.product._id)}
                  className="bg-red-500 text-white hover:bg-red-700 text-sm border p-2 rounded-lg"

                  onClick={() => handleRemove(item._id)}
                  className="bg-red-500 text-white p-2 rounded-md"

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

          <div className="flex justify-between items-center mt-6">
            <h2 className="text-2xl font-bold">Total: ${calculateTotal()}</h2>
            <button
              onClick={handleProceed}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}

    </div>
  );
};

export default CartPage;
