
import Image from "next/image";

export default function ShoppingCart() {
  return (
    <div className="min-h-screen flex items-center justify-center text-[#2A254B]">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-[#2A254B]">Your shopping cart</h1>
        <div className="space-y-4">
         
          <div className="flex items-start space-x-4">
            <Image
              src="/images/chair2.png" 
              alt="Graystone vase"
              width={80}
              height={80}
              className="rounded-md border-4 border-indigo-700"
            />
            <div>
              <h2 className="font-medium text-gray-800">Graystone vase</h2>
              <p className="text-sm text-gray-500">
                A timeless ceramic vase with a tri-color grey glaze.
              </p>
              <p className="font-semibold mt-2">£85</p>
              <div className="mt-2">
                <input
                  type="number"
                  value="1"
                  className="w-12 border rounded text-center"
                />
              </div>
            </div>
          </div>
       
          <div className="flex items-start space-x-4 pt-6">
            <Image
              src="/images/chair1.png" 
              alt="Basic white vase"
              width={80}
              height={80}
              className="rounded-md"
            />
            <div>
              <h2 className="font-medium text-gray-800">Basic white vase</h2>
              <p className="text-sm text-gray-500">
                Beautiful and simple, this is one for the classics.
              </p>
              <p className="font-semibold mt-2">£85</p>
              <div className="mt-2">
                <input
                  type="number"
                  value="1"
                  className="w-12 border rounded text-center"
                />
              </div>
            </div>
          </div>
        </div>
       
        <div className="border-t mt-6 pt-4">
          <div className="flex justify-between text-gray-800">
            <span className="font-medium">Subtotal</span>
            <span className="font-semibold">£210</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Taxes and shipping are calculated at checkout
          </p>
        </div>
       
        <button className="w-full bg-indigo-700 text-white py-3 rounded-lg mt-6">
          Go to checkout
        </button>
      </div>
    </div>
  );
}

