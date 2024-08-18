import { Icons } from "@/public/assets/icon";
import { navigation } from "@/static";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 ">
      <div className="wrapper ">
        <div className="flex grid-cols-1 md:grid-cols-3 justify-between ">
          <div className="mb-6 md:mb-0 text-center md:text-left md:col-span-1 ">
            <h1 className="text-xl font-semibold">Demo</h1>
            <p className="text-sm">
              Developed by{" "}
              <Link href="#" className="font-bold text-blue-600">
                SOLACTECH
              </Link>
            </p>
            <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">
              Register your Dispatch Company
            </button>
          </div>

          <div className="grid grid-col-1 md:grid-cols-3 gap-10 space-x-8 col-span-3 justify-end ">
            <div className="col-span-1">
              <h2 className="font-semibold mb-2">Demo</h2>

              <ul className="text-sm flex flex-col space-y-2">
                {navigation.demo.map((item) => {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="hover:text-gray-800"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </ul>
            </div>

            <div className="col-span-1">
              <h2 className="font-semibold mb-2">Support</h2>
              <ul className="text-sm  flex flex-col space-y-2">
                {navigation.support.map((item) => {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="hover:text-gray-800"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Resources</h2>
              <ul className="text-sm flex flex-col space-y-2">
                {navigation.resources.map((item) => {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="hover:text-gray-800"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="px-4 mt-6 flex flex-col md:flex-row justify-between items-center text-sm border-t pt-4">
          <div>
            <p className="text-center md:text-left mb-4 md:mb-0">
              © 2024 Demo. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-[5rem] md:justify-end mb-4 md:mb-0">
            <div className="flex items-center gap-5 ">
              {navigation.social.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link href={item.href} key={item.name}>
                    <IconComponent className="w-5 h-5 hover:text-gray-800 " />
                  </Link>
                );
              })}
            </div>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                $ USD
              </a>
              <Link href="#"></Link>
              <a
                href="#"
                className="flex items-center  gap-2 text-gray-600 hover:text-gray-800"
              >
                <Icons.Globe />
                English
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
