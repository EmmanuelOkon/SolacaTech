// "use client";

// import React from "react";
// import { ProductProps } from "@/interface";
// import { useParams } from "next/navigation";
// import { topDeals } from "@/static";

// interface ProductDetailProps {
//   product: ProductProps;
// }

// const ProductDetail: React.FC<ProductDetailProps> = () => {
//   const { productName } = useParams();

//   const product = topDeals.find(
//     (product) => product.name.replace(/\s+/g, "-").toLowerCase() === productName
//   );

//   if (!product) {
//     return <p>Product not found.</p>;
//   }

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
//       <img
//         src={product.imageUrl}
//         alt={product.name}
//         className="w-full h-64 object-cover rounded-lg mb-4"
//       />
//       <p className="text-lg text-gray-800 mb-2">
//         Price: ₦{product.price.toLocaleString()}
//       </p>
//       <p className="text-sm text-gray-600 mb-2">Vendor: {product.vendor}</p>
//       <div className="flex items-center mt-1">
//         <span className="ml-1 text-gray-600">
//           {product.rating.toFixed(1)} (32)
//         </span>
//       </div>
//       <p className="text-gray-600 mt-4">
//         {/* Add any additional product details here */}
//       </p>
//     </div>
//   );
// };

// export default ProductDetail;


import React from 'react'

const Page = () => {
  return (
    <div>page</div>
  )
}

export default Page