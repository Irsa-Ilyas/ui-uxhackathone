import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/producttype";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

async function getProduct(slug: string): Promise<Product | null> {
  if (!slug) return null; //

  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      image,
      price,
      description
    }`, 
    { slug }
  );
}
export default async function ProductPage({ params }: { params: { slug: string } }) {
  if (!params?.slug) {
    return <h1 className="text-center text-red-500">Invalid Product Slug</h1>;
  }

  const productItem = await getProduct(params.slug);

  if (!productItem) {
    return <h1 className="text-center text-red-500">Product Not Found</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="aspect-square">
          {productItem.image && (
            <div className="relative w-full h-64">
              <Image
                src={urlFor(productItem.image).url()}
                alt={productItem.name}
                width={300}
                height={300}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold">{productItem.name}</h1>
          <p className="text-xl text-gray-600">${productItem.price}</p>

          {productItem.dimensions && (
            <div className="mt-6">
              <h3 className="font-semibold text-xl">Dimensions</h3>
              {productItem.dimensions.height && (
                <p className="text-gray-700">Height: {productItem.dimensions.height}</p>
              )}
              {productItem.dimensions.width && (
                <p className="text-gray-700">Width: {productItem.dimensions.width}</p>
              )}
              {productItem.dimensions.depth && (
                <p className="text-gray-700">Depth: {productItem.dimensions.depth}</p>
              )}
            </div>
          )}

          <p className="mt-4 text-gray-800">{productItem.description}</p>
        </div>
      </div>
    </div>
  );
}
