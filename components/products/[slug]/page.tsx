

import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/producttype";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { GetServerSideProps } from "next"; // Import for server-side props

interface ProductProps {
  product: Product | null;
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Extract slug from params
  const slug = params?.slug as string;

  // Fetch product based on the slug
  const product = await getProduct(slug);

  // Return product as prop
  return {
    props: {
      product, // Pass the product as a prop to the page component
    },
  };
};

export default function ProductPage({ product }: ProductProps) {
  if (!product) {
    return <div>Product not found</div>; // Return a message if no product is found
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
        </div>
      </div>
    </div>
  );
}









