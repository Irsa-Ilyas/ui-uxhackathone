// import { client } from "@/sanity/lib/client";
// import { Product } from "../../../types/producttype";
// import { groq } from "next-sanity";
// import Image from "next/image";
// interface ProductProps{
// params:Promise<{slug:string}>
// }
// async function getProduct(slug:string):Promise<Product| null>{
//     return client.fetch(
//     groq `*[_type=="product" && slug.current == $slug][0]{
// _id,
// name,
// _type,
// image,
// price,
// description
//     }`
// ,{slug})
// }

// export default async function ProductPage(){
//     const slug = await params;
//     const product=await getProduct(slug)
// return(
//     <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div className="aspect-square">
//                 {
//                     productItem.image &&(
//                         <div className="relative w-full h-64">
//                                          <Image
//                                            src={urlFor(productItem.image).url()}
//                                            alt={productItem.name}
//                                            layout="fill"
//                                            objectFit="cover"
//                                            className="w-full h-full object-cover"
//                                          />
//                                        </div> 
//                     )
//                 }

//             </div>
//             <div>
//                 {productItem.price}
//             </div>
//         </div>

//     </div>
// )






// }

import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/producttype";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type=="product" && slug.current == $slug][0]{
      _id,
      name,
      _type,
      image,
      price,
      description
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductProps) {
  const { slug } = await params;  // Destructuring slug from the awaited params
  const product = await getProduct(slug);  
   // Get the product based on the slug
  
  // Check if the product exists
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <div className="relative w-full h-64">
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
        
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        <div>
          <p>{product.price}</p>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}









