import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from 'next/image'
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-indigo-600">
      <div className="flex items-center font-medium justify-around">
        <div className="z-30 p-5 md:w-auto w-full flex justify-between">
          <Image src="/image/logo.png" alt="logo" width={"190px"} height={"84px"} className="md:cursor-pointer h-9" />

          <div className="text-1xl text-white md:hidden" onClick={() => setOpen(!open)}>
            <Hamburger duration={0.8} toggled={open} toggle={setOpen} />
          </div>

        </div>
        <ul className="md:flex text-white hidden uppercase items-center  gap-5 font-[Poppins]">
          <li className="py-7 hover:-translate-y-1 hover:shadow-lg px-3 inline-block">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="py-7 hover:-translate-y-1 hover:shadow-lg px-3 inline-block">
            <Link href="/about">
              O nas
            </Link>
          </li>
          <NavLinks />
          <li className="py-7 hover:-translate-y-1 hover:shadow-lg px-3 inline-block">
            <Link href="/contact" className=" py-7 px-5 inline-block">
              Kontakt
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-indigo-600 z-20 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pt-40 pl-4
        duration-500  ${open ? "left-0" : "left-[-100%]"}
        `}>
          <li className="py-3 px-3 text-white inline-block">
            <Link href="/" className="py-7 px-10 inline-block">
              Home
            </Link>
          </li>
          
          <li className="py-3 px-3 text-white">
            <Link href="/about" className="py-7 px-10 inline-block">
              O nas
            </Link>
          </li>
          
          <NavLinks />
          <li className="py-3 px-3 inline-block text-white ">
            <Link href="/contact" >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;