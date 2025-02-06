

"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/producttype";
import { client } from "@/sanity/lib/client";
import { allProduct } from "@/sanity/lib/quieries"; // Corrected typo
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { addtocart } from "../actions/acions";

const MyProduct = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProduct);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, productItem: Product) => {
    e.preventDefault();
    addtocart(productItem);
    alert("Added to Cart");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((productItem) => (
          <div key={productItem._id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {productItem.image && (
              <div className="relative w-full h-64">
                <Image
                  src={urlFor(productItem.image).url()}
                  alt={productItem.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{productItem.name}</h3>
              <h3 className="text-xl font-bold text-gray-900 mt-2">${productItem.price}</h3>
              <p className="text-gray-600 line-clamp-2 mt-2">{productItem.description}</p>

              {productItem.dimensions && (
                <div className="mt-6">
                  <h3 className="font-semibold text-xl">Dimensions</h3>
                  <p className="text-gray-700">Height: {productItem.dimensions.height}</p>
                  <p className="text-gray-700">Width: {productItem.dimensions.width}</p>
                  <p className="text-gray-700">Depth: {productItem.dimensions.depth}</p>
                </div>
              )}

              {/* Add to Cart Button */}
              <button
                onClick={(e) => handleAddToCart(e, productItem)}
                className="mt-4 w-full bg-[#2A254B] text-white py-2 rounded-md hover:opacity-50 transition duration-300"
              >
                Add to Cart
              </button>

              {/* Show Details Button */}
              <Link href={`/product/${productItem.slug.current}`}>
                <button className="mt-2 w-full border border-gray-400 text-white py-2 rounded-md bg-[#2A254B] transition duration-300">
                  Show Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProduct;

// "use client";
// import React, { useEffect, useState } from "react";
// import { Product } from "../../../types/producttype";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/quieries"; // Corrected typo from 'quieries'
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// import { addtocart } from "../actions/acions"; // Corrected typo

// const MyProduct = () => {
//   const [product, setProduct] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProduct() {
//       const fetchedProduct: Product[] = await client.fetch(allProduct);
//       setProduct(fetchedProduct);
//     }
//     fetchProduct();
//   }, []);

//   const handleAddToCart = (e: React.MouseEvent, productItem: Product) => {
//     e.preventDefault();
//     addtocart(productItem);
//     alert("Added to Cart");
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {product.map((productItem) => (
//           <div key={productItem._id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//             {productItem.image && (
//               <div className="relative w-full h-64">
//                 <Image
//                   src={urlFor(productItem.image).url()}
//                   alt={productItem.name}
                
//                   objectFit="cover"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             )}
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-800 truncate">{productItem.name}</h3>
//               <h3 className="text-xl font-bold text-gray-900 mt-2">${productItem.price}</h3>
//               <p className="text-gray-600 line-clamp-2 mt-2">{productItem.description}</p>

//               {productItem.dimensions && (
//                 <div className="mt-6">
//                   <h3 className="font-semibold text-xl">Dimensions</h3>
//                   <p className="text-gray-700">Height: {productItem.dimensions.height}</p>
//                   <p className="text-gray-700">Width: {productItem.dimensions.width}</p>
//                   <p className="text-gray-700">Depth: {productItem.dimensions.depth}</p>
//                 </div>
//               )}

//               {/* Add to Cart Button */}
//               <button
//                 onClick={(e) => handleAddToCart(e, productItem)}
//                 className="mt-4 w-full bg-[#2A254B] text-white py-2 rounded-md hover:opacity-80 transition duration-300"
//               >
//                 Add to Cart
//               </button>

//               {/* Show Details Button */}
//               <Link href={`/product/${productItem.slug.current}`}>
//                 <button className="mt-2 w-full border border-gray-400 text-white py-2 rounded-md bg-[#2A254B] transition duration-300">
//                   Show Details
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyProduct;
