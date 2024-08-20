import { ProductProps } from "@/interface";
import { Icons } from "@/public/assets/icon";
import { topDeals } from "@/static";
import React from "react";

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => (
  <div className="bg-white shadow rounded-lg overflow-hidden">
    <div className="relative">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-2 right-2 flex space-x-1">
        <button className="p-1 bg-white rounded-full shadow">
          <Icons.Heart className="text-white" />
        </button>
        <button className="p-1 bg-white rounded-full shadow">
          <Icons.Cart />
        </button>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600">₦{product.price.toLocaleString()}</p>
      <div className="flex items-center mt-1">
        <Icons.Rating />
        <span className="ml-1 text-gray-600">
          {product.rating.toFixed(1)}(32){" "}
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-1">Vendor: {product.vendor}</p>
    </div>
  </div>
);

const TopDeals: React.FC = () => {
  return (
    <div className="p-4">
      <div className="wrapper ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Top Men Clothes</h2>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            See All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {topDeals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDeals;
