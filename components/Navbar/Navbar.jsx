import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";
import Image from 'next/image'
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-slate-400">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Image src={Logo} alt="logo" className="md:cursor-pointer h-9" />

          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <Hamburger toggled={open} toggle={setOpen} />
          </div>

        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li className="py-7 px-3 inline-block">
            <Link href="/">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link href="/" className="py-7 px-5 inline-block">
              Kontakt
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-slate-400 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li className="py-3 px-3 inline-block">
            <Link href="/" className="py-7 px-10 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li className="py-3 px-3 inline-block">
            <Link href="/" >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;