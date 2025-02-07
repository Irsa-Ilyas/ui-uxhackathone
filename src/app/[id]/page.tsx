"use client";
import { useCart } from "@/context/Context";
import { client } from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Product {
    _id: string;
    category: string;
    name: string;
    price: number;
    description?: string;
    imageUrl?: string;
}

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [productData, setProductData] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const { addToCart, addToWishlist } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;
            try {
                const data: Product = await client.fetch(
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
                setProductData(data);
            } catch (error) {
                console.error("Error fetching product data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div className="text-center py-6">Loading...</div>;
    if (!productData) return <div className="text-center py-6">Product not found</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                <Image
                    src={productData.imageUrl || "/fallback-image.jpg"}
                    alt={productData.name}
                    width={350}
                    height={450}
                    className="rounded-md"
                    priority
                />
                <div>
                    <h2 className="text-3xl text-[#2A254B] font-semibold">{productData.name}</h2>
                    <p className="text-xl text-[#2A254B] mt-4">£{productData.price.toFixed(2)}</p>
                    <p className="text-base text-gray-500 mt-4">
                        {productData.description ? productData.description.slice(0, 250) : "No description available."}
                    </p>
                    <div className="flex justify-start items-center gap-3 pt-5">
                        <button
                            onClick={() =>
                                addToCart({
                                    ...productData,
                                    description: productData.description || "",
                                    imageUrl: productData.imageUrl || "/fallback-image.jpg",
                                })
                            }
                            className="bg-[#2A254B] text-white px-3 py-1 sm:px-6 sm:py-3 rounded-lg hover:bg-white border hover:border-[#2A254B] hover:text-[#2A254B] transition-colors"
                        >
                            Add to Cart
                        </button>

                        <button
                            onClick={() =>
                                addToWishlist({
                                    ...productData,
                                    description: productData.description || "",
                                    imageUrl: productData.imageUrl || "/fallback-image.jpg",
                                })
                            }
                            className="bg-white sm:px-6 px-3 py-1 sm:py-3 rounded-lg hover:bg-[#2A254B] hover:text-white border border-[#2A254B] hover:border-white transition-colors"
                        >
                            Add to WishList
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
