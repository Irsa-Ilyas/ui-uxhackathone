"use client";
import { useCart } from "@/context/Context";
import { client } from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>(); // Fetch dynamic id from URL params
    const [productData, setProductData] = useState<any>(null); // State to hold product data
    const [loading, setLoading] = useState(true); // To handle loading state
    const { addToCart } = useCart(); // Get cart and addToCart from context


    useEffect(() => {
        if (id) {
            // Fetch product data when the component mounts or id changes
            const fetchProduct = async () => {
                try {
                    const data = await client.fetch(
                        `*[_type == "product" && _id == $id]{
                _id,
                category,
                name,
                price,
                description,
                "imageUrl": image.asset->url
              }[0]`,
                        { id }
                    );
                    setProductData(data); // Set product data
                    setLoading(false); // Set loading to false once data is fetched
                } catch (error) {
                    console.error("Error fetching product data", error);
                }
            };

            fetchProduct();
        }
    }, [id]); // Re-run the effect when the id changes

    if (loading) return <div>Loading...</div>; // Show loading message while fetching
    if (!productData) return <div>Product not found</div>; // Handle case when product data is not found

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                <img
                    src={productData.imageUrl}
                    alt={productData.name}
                    width={350}
                    height={450}
                    className="rounded-md"
                />
                <div>
                    <h2 className="text-3xl text-[#2A254B] font-semibold">{productData.name}</h2>
                    <p className="text-xl text-[#2A254B] mt-4">£{productData.price}</p>
                    <p className="text-base text-gray-500 mt-4">{productData.description && `${productData.description.slice(0, 250)}`}</p>
                    <button
                        onClick={() => addToCart(productData)} // Add to cart functionality
                        className="bg-[#2A254B] text-white px-6 py-3 mt-6 rounded-lg hover:bg-[#1E1B3D] transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
