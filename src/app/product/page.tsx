"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import sanityClient from "@sanity/client";
import "tailwindcss/tailwind.css";

// Initialize the Sanity client
const sanity = sanityClient({
  projectId: "xp3lnr3e",
  dataset: "production",
  apiVersion: "2025-01-15",
  useCdn: true,
});



const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Fetch products from the Sanity API
  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"]{
          _id,
          name,
          slug,
          price,
          quantity,
          description,
          features,
          dimensions,
          "imageUrl": image.asset->url
        }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to the cart`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="heading2">Products from API Data</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 text-[#2A254B]"
          >
            <Image
              src={product.imageUrl || "/fallback-image.jpg"} // Fallback for missing image
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4 text-[#2A254B]">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm line-clamp-2 mt-2">{product.description}</p>

              {/* Display features */}
              {product.features && (
                <ul className="mt-2 list-disc pl-5">
                  <h3 className="font-semibold">Features:</h3>
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* Display dimensions */}
              {product.dimensions && (
                <div className="mt-2">
                  <h3 className="font-semibold">Dimensions:</h3>
                  <p className="text-sm">
                    Height: {product.dimensions.height || "N/A"} <br />
                    Width: {product.dimensions.width || "N/A"} <br />
                    Depth: {product.dimensions.depth || "N/A"}
                  </p>
                </div>
              )}

              <div className="flex justify-between items-center mt-4">
                <p className="font-bold">${product.price.toFixed(2)}</p>
              </div>
              <button
                className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-4 rounded-lg shadow-md p-6 bg-green-100">
        <h2 className="font-medium text-red-400">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 shadow-md"
              >
                <div>
                  <p className="font-medium text-yellow-600">{item.name}</p>
                  <p className="font-medium text-sm text-blue-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <Image
                  src={item.imageUrl || "/fallback-image.jpg"}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your cart is empty. Please add products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;








