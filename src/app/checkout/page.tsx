// pages/checkout.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/Context"; // Import the useCart hook
import { useRouter } from "next/navigation";
import Image from "next/image";

const CheckoutPage: React.FC = () => {
    const { cart } = useCart(); // Get cart items
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const router = useRouter();

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

        // Store user data in localStorage
        localStorage.setItem("userData", JSON.stringify(formData));

        // Simulate submitting the order
        setTimeout(() => {
            setIsSubmitting(false);
            setShowPopup(true);
        }, 1500);
    };

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const confirmOrder = () => {
        setShowPopup(false);
        router.push("/"); // Navigate to home page after confirmation
    };

    useEffect(() => {
        if (cart.length === 0) {
            router.push("/cart"); // Redirect if cart is empty
        }
    }, [cart, router]);

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <h1 className="text-4xl font-extrabold text-[#2A254B] mb-6">Checkout</h1>

                {/* Display Selected Products */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-[#2A254B] mb-4">Your Cart</h2>
                    {cart.length === 0 ? (
                        <p className="text-center text-gray-500">No products selected.</p>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center py-4 border-b"
                                >
                                    <div className="flex items-center">
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.name}
                                            width={80}
                                            height={80}
                                            className="rounded-md"
                                        />
                                        <div className="ml-4">
                                            <p className="text-lg font-semibold">{item.name}</p>
                                            <p className="text-sm">£{item.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <p className="text-lg font-medium">Qty: {item.quantity}</p>
                                        <p className="text-lg font-medium">£{(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-between items-center py-4">
                                <p className="text-lg font-semibold text-[#2A254B]">Total: £{calculateTotal().toFixed(2)}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Shipping Information Form */}
                <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-[#2A254B] mb-4">Shipping Information</h2>

                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:space-x-6">
                            <div className="w-full">
                                <label className="block text-lg font-medium text-[#2A254B]">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 p-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-lg font-medium text-[#2A254B]">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 p-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="block text-lg font-medium text-[#2A254B]">Contact Number</label>
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 p-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
                            />
                        </div>

                        <div className="w-full">
                            <label className="block text-lg font-medium text-[#2A254B]">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 p-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
                            />
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <div className="mt-6 flex justify-between items-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-8 py-3 bg-[#2A254B] text-white font-semibold rounded-lg hover:bg-[#1E1B3D] transition-all duration-300"
                        >
                            {isSubmitting ? "Processing..." : "Place Order"}
                        </button>
                    </div>
                </form>

                {/* Confirmation Popup */}
                {showPopup && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                            <h2 className="text-2xl font-semibold text-[#2A254B] mb-4">Order Confirmed!</h2>
                            <p className="mb-4">Your order has been placed successfully. We will process it soon.</p>
                            <button
                                onClick={confirmOrder}
                                className="px-6 py-3 bg-[#2A254B] text-white font-semibold rounded-lg hover:bg-[#1E1B3D] transition-all duration-300"
                            >
                                Go to Home
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
