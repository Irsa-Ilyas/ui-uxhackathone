"use client";
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
                  onClick={() => handleRemove(item._id)}
                  className="bg-red-500 text-white p-2 rounded-md"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
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
