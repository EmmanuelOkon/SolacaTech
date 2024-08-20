import { Icons } from "@/public/assets/icon";
import Image from "next/image";
import React from "react";

const AppShowcase: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Phone Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <img
                src="/assets/images/applePhone.png"
                alt="Demo App on Phone"
                className="wfull max-w-sm mx-auto max-h-[585px] w-[286px] "
              />
              <div className="bg-white p-3 max-w-[280px] max-h-[67px] rounded-[14px] absolute top-24 right-0 ">
                <div className="flex gap-2 ">
                  <div className="flex items-center gap-2 ">
                    <Image
                      src="/assets/images/appletestimage1.png"
                      width={100}
                      height={100}
                      alt="test"
                      className=" w-[23px] h-[23px] rounded-full"
                    />
                    <div className="flex flex-col gap-1 text-[#333333] max-w-[166px] ">
                      <h1 className="font-bold text-[8px] ">Jonas Sua </h1>
                      <p className="text-[7px] font-normal body ">
                        Viverra ut tellus et tincidunt facilisis ac scelerisque
                        tellus eu. Risus sit tellus elit neque odio elementum
                        nulla.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col max-h-[49px] justify-between ">
                    <Image
                      src="/assets/images/applerate.png"
                      width={100}
                      height={100}
                      alt="test"
                      className=" max-w-[50px] h-[10px] "
                    />
                    <p className="text-[7px] font-normal body ">
                      04 March 2024
                    </p>
                  </div>
                </div>
              </div>
              {/* // className="" */}
              <div className="bg-white p-3 max-w-[280px] max-h-[67px] rounded-[14px] absolute bottom-1 -right-32  ">
                <div className="flex gap-2 ">
                  <div className="flex items-center gap-2 ">
                    <Image
                      src="/assets/images/appletestimage1.png"
                      width={100}
                      height={100}
                      alt="test"
                      className=" w-[23px] h-[23px] rounded-full"
                    />
                    <div className="flex flex-col gap-1 text-[#333333] max-w-[166px] ">
                      <h1 className="font-bold text-[8px] ">Jonas Sua </h1>
                      <p className="text-[7px] font-normal body ">
                        Viverra ut tellus et tincidunt facilisis ac scelerisque
                        tellus eu. Risus sit tellus elit neque odio elementum
                        nulla.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col max-h-[49px] justify-between ">
                    <Image
                      src="/assets/images/applerate.png"
                      width={100}
                      height={100}
                      alt="test"
                      className=" max-w-[50px] h-[10px] "
                    />
                    <p className="text-[7px] font-normal body ">
                      04 March 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App Description */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Demo App</h2>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {"★★★★★".split("").map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </div>
              <span className="ml-2 text-gray-600">5.0</span>
            </div>
            <p className="text-gray-600 mb-6">
              Provide a complete digital experience with the feature-rich Demo
              iOS and Android mobile apps. Enhance your web application powered
              by Demo to provide the distinctive Demo user experience on
              multiple platforms.
            </p>
            <p className="text-gray-600 mb-8">
              The buyer app&apos;s flexible policies, interactive features,
              strong performance, and user-friendly UI all work together to
              attract users.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-[#04203D] text-white px-6 py-2 rounded-lg flex items-center hover:bg-gray-800 transition duration-300"
              >
                <Icons.GooglePlay />
                Google Play
              </a>
              <a
                href="#"
                className="bg-[#04203D] text-white px-6 py-2 rounded-lg flex items-center hover:bg-gray-800 transition duration-300"
              >
                <Icons.AppleStore />
                Apple Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
