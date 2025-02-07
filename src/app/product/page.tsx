"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/context/Context";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

// ✅ Define Product Type
interface Product {
  _id: string;
  name: string;
  slug?: string;
  price: number;
  description: string;
  category: string;
  features: string[];
  dimensions?: {
    height?: number;
    width?: number;
    depth?: number;
  };
  imageUrl: string; // ✅ Always a string
}

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart, addToWishlist } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
          *[_type == "product"]{
            _id,
            name,
            slug,
            price,
            description,
            category,
            features,
            dimensions,
            "imageUrl": image.asset->url
          }
        `;
        const data = await client.fetch(query);

        // ✅ Ensure `imageUrl` is always a string
        const formattedData: Product[] = data.map((product: Product) => ({
          ...product,
          description: product.description ?? "",
          features: product.features ?? [],
          imageUrl: product.imageUrl ?? "/fallback-image.jpg", // ✅ Default fallback
        }));

        setProducts(formattedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#2A254B]">
        All New Products
      </h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
            <Link href={`/${product._id}`}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
            </Link>
            <h2 className="mt-3 text-lg font-semibold text-[#2A254B]">
              {product.name}
            </h2>

            {product.features.length > 0 && (
              <ul className="mt-2 list-disc pl-5 text-sm">
                <h3 className="font-semibold">Features:</h3>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}

            {product.dimensions && (
              <div className="mt-2 text-sm">
                <h3 className="font-semibold">Dimensions:</h3>
                <p>
                  Height: {product.dimensions?.height ?? "N/A"} <br />
                  Width: {product.dimensions?.width ?? "N/A"} <br />
                  Depth: {product.dimensions?.depth ?? "N/A"}
                </p>
              </div>
            )}

            <div className="flex justify-between items-center my-3">
              <p className="font-bold text-lg text-[#2A254B]">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="flex flex-wrap w-full justify-between items-center gap-2">
              <button
                className="w-2/3 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <FaRegHeart
                size={40}
                className="w-1/4 py-2 cursor-pointer bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
                onClick={() => addToWishlist(product)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
