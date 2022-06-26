import React, { useState } from "react";
import Link from "next/link";
import { links } from "./MyLinks";
import {BsChevronUp} from 'react-icons/bs'
import {BsChevronDown} from 'react-icons/bs'

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-white text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}>
              {link.name}
              <span className="text-xl z-100 md:hidden inline">
              {heading === link.name ? <BsChevronUp/> : <BsChevronDown/>}
              </span>
              
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <BsChevronDown/> 
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 z-50 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            {/* <Link href={slink.link}> */}
                              <a href={slink.link} className="hover:text-indigo-600">{slink.name}</a>
                            {/* </Link> */}
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div className="">
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li key= {slink.name} className="py-3 pl-14 text-white">
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;