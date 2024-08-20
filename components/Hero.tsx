import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my10 py-10  ">
      <div className="bg-[#1E1E1E] pt-10 flex items-center justify-between m10 px-4 lg:px-16 wrapper rounded-[20px]">
        <div className="body text-white pb-10 ">
          <h1 className="text-[40px] ">Easter Sales</h1>
          <p className="font-semibold text-[30px] ">
            Enjoy Up To 80% Off This Easter
          </p>
        </div>
        <div className="flex items-end justify-end">
          <Image
            src="/assets/images/heroImage.png"
            width={500}
            height={500}
            alt="heroImage"
            className="max-w-[450px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
