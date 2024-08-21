import React from "react";
import { products } from "@/static";
import ProductCard from "./ProductCard";

const Favourite: React.FC = () => {
  const topDeals = products.filter(
    (product) => product.category === "Favourite"
  );

  return (
    <div className="p-4">
      <div className="wrapper ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 body ">Favourite Accessories</h2>
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

export default Favourite;
