"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/Context";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const CheckoutPage: React.FC = () => {
    const { cartItems, setCartItems } = useCart();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (cartItems.length === 0) {
            router.push("/");
        }
    }, [cartItems, router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        localStorage.setItem("userData", JSON.stringify(formData)); // Save user data
        setTimeout(() => {
            setIsSubmitting(false);
            setShowPopup(true);
        }, 1500);
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    };

    const confirmOrder = () => {
        localStorage.setItem("orderData", JSON.stringify(cartItems));
        localStorage.removeItem("cartItems");
        setCartItems([]);
        setShowPopup(false);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-[#2A254B] mb-6 text-center">Checkout</h1>

                {/* Cart Summary */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-[#2A254B] mb-4">Your Cart</h2>
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-500">No products selected.</p>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.product._id} className="flex items-center justify-between py-4 border-b">
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src={item.product.imageUrl || "/fallback-image.jpg"}
                                            alt={item.product.name}
                                            width={70}
                                            height={70}
                                            className="rounded-md"
                                        />
                                        <div>
                                            <p className="text-lg font-medium">{item.product.name}</p>
                                            <p className="text-sm text-gray-500">£{item.product.price}</p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-medium">Qty: {item.quantity}</p>
                                </div>
                            ))}
                            <div className="flex justify-between items-center pt-4">
                                <p className="text-lg font-semibold text-[#2A254B]">Total: £{calculateTotal().toFixed(2)}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Shipping Information */}
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-[#2A254B] mb-4">Shipping Information</h2>
                    <div className="space-y-4">
                        {Object.keys(formData).map((field) => (
                            <div key={field} className="w-full">
                                <label className="block text-lg font-medium text-[#2A254B] capitalize">{field}</label>
                                <input
                                    type="text"
                                    name={field}
                                    value={formData[field as keyof typeof formData]}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 bg-[#2A254B] text-white font-semibold rounded-lg hover:bg-[#1E1B3D] transition disabled:opacity-50"
                        >
                            {isSubmitting ? "Processing..." : "Place Order"}
                        </button>
                    </div>
                </form>

                {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl text-center max-w-sm w-full">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#2A254B] mb-4">🎉 Order Confirmed!</h2>
                            <p className="text-gray-600 text-sm md:text-base">
                                Your order has been placed successfully.
                            </p>
                            <Link
                                href="/"
                                onClick={confirmOrder}
                                className="mt-6 inline-block px-6 py-3 bg-[#2A254B] text-white font-semibold rounded-lg hover:bg-[#1E1B3D] transition-all duration-300"
                            >
                                Go to Home
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default CheckoutPage;
