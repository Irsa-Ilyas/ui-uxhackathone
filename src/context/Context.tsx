"use client";
import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";

interface ICartType {
  _id: string;
  category: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface CartItem {
  product: ICartType;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (product: ICartType) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  addToWishlist: (product: ICartType) => void;
  removeFromWishlist: (productId: string) => void;
  wishlist: ICartType[];
  setWishlist: React.Dispatch<React.SetStateAction<ICartType[]>>;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<ICartType[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem("cartItems");
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedCartItems) setCartItems(JSON.parse(storedCartItems));
      if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const addToWishlist = (product: ICartType) => {
    if (!wishlist.some((item) => item._id === product._id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const addToCart = (product: ICartType) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product._id === product._id
      );
      return existingItem
        ? prevItems.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        : [...prevItems, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product._id !== productId)
    );
  };

  const increaseQuantity = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product._id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item._id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        wishlist,
        setWishlist,
        addToWishlist,
        removeFromWishlist,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
