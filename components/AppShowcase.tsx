import Image from "next/image";
import React from "react";

const AppShowcase: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-16 px-4 sm:px-6 lg:px-8">
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
              <Image
                src="/assets/images/appleTestimonial2.png"
                alt="test"
                width={500}
                height={300}
                className="absolute bottom-1 -right-32 "
              />
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
                className="bg-black text-white px-6 py-2 rounded-lg flex items-center hover:bg-gray-800 transition duration-300"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.721 2.3C18.1676 1.84667 18.8009 1.62956 19.449 1.69228C19.59 2.33801 19.5274 2.9912 19.2593 3.60826C18.9913 4.22532 18.5289 4.75416 17.932 5.15C17.4821 5.59667 16.8504 5.81778 16.2 5.76C16.059 5.11427 16.1216 4.46108 16.3896 3.84402C16.6577 3.22696 17.1201 2.69812 17.717 2.3H17.721ZM20.863 17.0999C21.1203 16.6038 21.3098 16.073 21.425 15.5269C18.8504 14.5351 18.488 10.7029 21.042 9.09995C20.2083 8.02745 19.0641 7.2597 17.778 6.89995C16.7386 6.60611 15.5047 6.65295 14.524 7.10995C13.458 7.58995 12.765 7.58995 11.623 7.08995C10.5166 6.61075 9.30627 6.4328 8.11502 6.56995C6.88076 6.71622 5.71036 7.20308 4.72702 7.97995C2.51102 9.74495 1.08402 12.827 1.31602 16.195C1.41215 17.6178 1.80449 19.0038 2.46602 20.2699C3.36002 21.9999 4.65902 23.5999 6.27202 23.6199C7.43802 23.6399 7.91502 22.9179 9.40002 22.9179C10.873 22.9179 11.295 23.6199 12.55 23.6399C14.208 23.6599 15.381 22.2139 16.244 20.4939C16.851 19.3329 17.252 18.0878 17.431 16.803C16.144 16.2602 15.0894 15.2906 14.453 14.0608C13.8166 12.831 13.638 11.4188 13.948 10.0759C14.2581 8.73297 15.0389 7.54552 16.16 6.72995C15.5016 6.0345 14.692 5.50229 13.797 5.16942C12.9019 4.83655 11.9445 4.71252 10.994 4.80595C9.6839 4.97102 8.46156 5.5652 7.52702 6.49995C6.60945 7.41799 6.05606 8.63456 5.96602 9.92995C5.88132 11.1049 6.11824 12.2801 6.65071 13.3314C7.18318 14.3827 8.00042 15.2743 9.01802 15.9139C9.94753 16.4906 10.9876 16.8707 12.073 17.0319C13.1584 17.1932 14.2673 17.1329 15.33 16.8549C16.3462 16.586 17.2912 16.1137 18.111 15.465C19.127 16.363 20.134 16.945 20.863 17.0999Z" />
                </svg>
                Apple Store
              </a>
              <a
                href="#"
                className="bg-black text-white px-6 py-2 rounded-lg flex items-center hover:bg-gray-800 transition duration-300"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.799-3.8l-2.301-2.301 10.936-6.333-8.635 8.635zm3.798 3.8L11.206 22.64l-.222-.128v-1.66l10.889-10.889 1.223 1.744z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
