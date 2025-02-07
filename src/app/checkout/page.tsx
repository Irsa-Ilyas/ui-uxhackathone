
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

"use client";
import { Product } from "../../../types/producttype";
import { useEffect, useState } from "react";
import { getCartItems } from "../actions/acions";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { client } from "@/sanity/lib/client";
const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      alert("Order placed successfully!");
    } else {
      alert("Please fill in all the required fields.");
      return; // Stop execution if form is invalid
    }
  
    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      zipCode: formValues.zipCode,
      city: formValues.city,
      phone: formValues.phone,
      email: formValues.email,
      cartItems: cartItems.map(item => ({
        _type: "reference",
        _ref: item._id
      })),
      total: total,
      discount: discount,
      orderDate: new Date().toISOString(),
    };
  
    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
      console.log("Order successfully placed!");
    } catch (error) {
      console.log("Error placing order:", error);
    }
  };
  


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/cart"
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.inventory}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.price * item.inventory}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Subtotal: <span className="font-medium">${subtotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">-${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Billing Form */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="border w-full p-2 rounded"
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500">
                    First name is required.
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastName">Last Name </label>
                <input
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className="border w-full p-2 rounded"
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500">
                    Last name is required.
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="address">Address </label>
              <input
                id="address"
                placeholder="Enter your address"
                value={formValues.address}
                onChange={handleInputChange}
                className="border w-full p-2 rounded"
              />
              {formErrors.address && (
                <p className="text-sm text-red-500">Address is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                id="city"
                placeholder="Enter your city"
                value={formValues.city}
                onChange={handleInputChange}
                className="border w-full p-2 rounded"
              />
              {formErrors.city && (
                <p className="text-sm text-red-500">City is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="zipCode">Zip Code</label>
              <input
                id="zipCode"
                placeholder="Enter your zip code"
                value={formValues.zipCode}
                onChange={handleInputChange}
                className="border w-full p-2 rounded"
              />
              {formErrors.zipCode && (
                <p className="text-sm text-red-500">Zip Code is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleInputChange}
                className="border w-full p-2 rounded"
              />
              {formErrors.phone && (
                <p className="text-sm text-red-500">Phone is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Enter your email address"
                value={formValues.email}
                onChange={handleInputChange}
                className="border w-full p-2 rounded"
              />
              {formErrors.email && (
                <p className="text-sm text-red-500">Email is required.</p>
              )}
            </div>
            <button
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;



