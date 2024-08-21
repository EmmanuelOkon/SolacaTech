import { Product } from "@/interface";
import { Icons } from "@/public/assets/icon";
import Link from "next/link";

const VendorProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <Link
    href={`/customer/product/${product.name
      .replace(/\s+/g, "-")
      .toLowerCase()} `}
    className="bg-white shadow rounded-lg overflow-hidden"
  >
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
          <Icons.Cart className="text-[#333333] hover:text-black " />
        </button>
      </div>
    </div>
    <div className="p-2">
      <h3 className="text-[11px] font-bold text-gray-800 body ">
        {product.name}
      </h3>
      <p className="text-gray-600 body font-bold ">
        ₦{product.price.toLocaleString()}
      </p>
      <div className="flex items-center mt-1">
        <Icons.Rating className="text-[#FCA617] w-4 h-4  " />
        <span className="ml-1 text-gray-600">
          {product.rating.toFixed(1)}(32){" "}
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        <span className="font-semibold">Vendor:</span>
        {` `}
        {product.vendor}
      </p>
    </div>
  </Link>
);

export default VendorProductCard;
