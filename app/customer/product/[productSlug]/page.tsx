"use client";

import { useParams } from "next/navigation";

import { products } from "@/static";
import ProductInfo from "@/components/ProductInfo";

import VendorCard from "@/components/VendorCard";

const ProductDetail = () => {
  const { productSlug } = useParams();

  // Ensure the slug is correctly passed
  console.log("Product Slug:", productSlug);

  // Find the product based on the slug
  const product = products.find(
    (p) => p.name.replace(/\s+/g, "-").toLowerCase() === productSlug
  );

  if (!product) {
    return <div>Product not found.</div>;
  }

  console.log("Product Details:", product);

  return (
    <div className="wrapper pt-10">
      <div className="flex justify-between gap-6 ">
        <div className="max- w-[821px] bg-white rounded-[15px] ">
          <div className="max-w-[600px] max-h[517px] flex justify-center rounded-[20px] ">
            <img
              src={product.imageUrl}
              alt={product.name}
              //   className="w-full h-full object-cover "
              className="flex items-end rounded-[14px] w-full h-full object-cover"
              style={{
                // backgroundImage: `${product.imageUrl}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <p>tex</p>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>

          {product.vendor}
        </div>
        <div className="flex flex-col gap-5 max-w-[395px] rounded-[15px] space-y-4 ">
          <ProductInfo
            name={product.name}
            rating={product.rating}
            price={product.price}
            category={product.category}
            originalPrice={product.originalPrice}
          />

          <VendorCard
            name="Esther Ubi"
            shopName="Mobilyz Shop"
            rating={4.5}
            totalRatings={3}
            distance={2.07}
            freeDelivery={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
