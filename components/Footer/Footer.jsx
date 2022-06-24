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
    <footer className="mt-20 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-screen-xl px-3 pt-16 sm:px-8">
        <div className="grid grid-cols-3 sm:!grid-cols-2 gap-y-6 gap-x-6 md:!grid-cols-3 md:gap-64 xs:grid-cols-1">
          <div className="mb-4  flex flex-col xs:col-span-2">
            <span className="text-xl font-bold capitalize">ScanStone</span>
            <p className="mt-4 max-w-screen-xs text-sm">
            58-152 Rogoźnica<br/><br/>

            +48 603 110 680<br/>

            +48 601 567 990<br/>
            <br/>
            biuro@scanstone.pl
            </p>
            <ul
              id="social-media-links"
              className="mt-4 flex items-center space-x-4"
            ></ul>

            <a
              href="https://www.linkedin.com/"
              rel="noreferrer"
              target="_blank"
              className="mt-4 max-w-min"
            ></a>
          </div>

          {Object.entries(footerNav).map(([title, items]) => {
            return (
              <div key={title}>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {title}
                </h2>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href}>
                        <a className="transition-all duration-150 hover:text-indigo-800 hover:underline dark:text-gray-300 dark:hover:text-white">
                          {item.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div
          id="footer-copyright"
          className="mt-2 border-t border-slate-200 py-4 dark:border-slate-600"
        >
          <p className="text-center text-sm dark:text-gray-300">
            Copyright © 2022{" "}
            <a
              href="https://github.com/miadv"
              className="font-semibold hover:text-indigo-800 hover:underline dark:hover:text-white"
            >
              ScanStone
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
