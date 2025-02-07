"use client";
import React from "react";
import { useCart } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";

interface Product {
    _id: string;
    name: string;
    price: number;
    imageUrl?: string;
}

const Wishlist: React.FC = () => {
    const { wishlist = [], removeFromWishlist } = useCart(); // Ensure wishlist is an array

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-[#2A254B]">
                My Wishlist
            </h2>

            {wishlist.length === 0 ? (
                <p className="text-center text-lg text-gray-500">Your wishlist is empty.</p>
            ) : (
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {wishlist.map((product: Product) => (
                        <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
                            <Link href={`/${product._id}`}>
                                <Image
                                    src={product.imageUrl || "/fallback-image.jpg"}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-48 object-cover rounded-md"
                                    priority
                                />
                            </Link>
                            <h2 className="mt-3 text-lg font-semibold text-[#2A254B]">{product.name}</h2>
                            <p className="mt-2 font-semibold text-lg text-[#2A254B]">
                                ${product.price ? product.price.toFixed(2) : "0.00"}
                            </p>

                            <button
                                className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
                                onClick={() => removeFromWishlist(product._id)}
                            >
                                Remove from Wishlist
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
