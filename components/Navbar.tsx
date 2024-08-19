"use client";

import * as React from "react";
import { Icons } from "@/public/assets/icon";
import Link from "next/link";
import { Input } from "@/components/ui/input";


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className=" wrapper ">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Icons.Logo />
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-start">
            <div className="max-w-lg w-full lg:max-w-xs">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icons.Search />
                </div>

                <input
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm md:w-[36vw] "
                  placeholder="Search products, categories and brands"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Become a Vendor
            </button>
            <Link
              href="/login"
              className="ml-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
            >
              Login
            </Link>
            <Link
              href="/login"
              className="ml-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            >
              Get Started
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Icons.Hamburger
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
              />
              <Icons.XIcon
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
          >
            Become a Vendor
          </a>
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
          >
            Login
          </a>
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-blue-600 hover:bg-blue-50 hover:border-blue-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
