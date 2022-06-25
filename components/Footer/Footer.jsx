import React from "react";
import Link from "next/link";

const footerNav = {
  Firma: [
    {
      title: "About Us",
      href: "/#",
    },
    { title: "Contact Us", href: "/#" },
  ],
  "Wybrane Ofery": [
    {
      title: "Kostka granitowa Szwed",
      href: "/#",
    },
    { title: "Kostka granitowa Vanga", href: "/#" },
    { title: "Kostka granitowa Biała", href: "/#" },
  ],
};

const Footer = () => {
  return (
    <footer class="p-4 text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg shadow md:px-6 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
          <img src="/image/logo.png" class="mr-3 h-120" alt="Flowbite Logo" />
    
        </a>
        <ul class="flex flex-wrap items-center justify-center text-white mb-6 text-sm  sm:mb-0">
          <li>
            <a href="#" class="mr-4  hover:underline md:mr-6">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="/contact" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-white sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com/" class="hover:underline">
          ScanStone
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;

