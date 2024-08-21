import React from "react";
import { vendors } from "@/static";
import Link from "next/link";

interface VendorImage {
  avatarUrl: string;
  name: string;
}

const VendorCard: React.FC<{ vendor: VendorImage }> = ({ vendor }) => (
  <Link
    href={`/customer/vendor/${vendor.name
      .replace(/\s+/g, "-")
      .toLowerCase()} `}
  >
    <div className="bg-white shadow rounded-lg overflow-hidden block w-[395px] h-[265px] ">
      <img src={vendor.avatarUrl} alt={vendor.name} className=" object-cover" />
    </div>
  </Link>
);

const TopVendors: React.FC = () => {
  return (
    <div className="bg-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Top Vendors</h2>
          <Link href="#" className="text-blue-600 hover:text-blue-800">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.name} vendor={vendor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopVendors;
