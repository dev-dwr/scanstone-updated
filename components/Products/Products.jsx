import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
    {
        productName: "Kamień murowy Vanga",
      image: "/image/products/murowy-vanga.jpg",
      link: "/grys/granitowy",
    },
    {
        productName: "Kamień murowy Bohus",
      image: "/image/products/murowy-bohus.jpg",
      link: "/grys/granitowy",
    },
    {
        productName: "Krawęniki granitowe",
      image: "/image/products/krawezniki.jpg",
      link: "/grys/granitowy",
    },
    {
        productName: "Płyty chodnikowe granitowe",
      image: "/image/products/chodnikowe.jpg",
      link: "/plyty/granitowe",
    },
    {
        productName: "Parapety granitowe",
      image: "/image/products/parapety.jpg",
      link: "/grys/granitowy",

    },
    {
        productName: "Schody granitowe",
      image: "/image/products/schody.jpg",
      link: "/grys/granitowy",

    },

    {
        productName: "Grys granitowy",
        image: "/image/products/grys.jpg",
        link: "/grys/granitowy",

      },
      {
        productName: "Bryły granitowe",
        image: "/image/products/bryly.jpg",
        link: "/bloki/granitowe",
      },
      {
        productName: "Niesort granitowy",
        image: "/image/products/niesort.jpg",
        link: "/niesort/granitowy",

      },
  ];


export const Products = () => {
    return (
      <section id="products">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Elementy granitowe budowlane</h2>
        </div>
  
        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((item, i) => (
              <a href={item.link} key={i} className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
                <div className="relative block overflow-hidden  pt-[70%]">
                  <Image
                    src={item.image}
                    alt={item.productName}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-200 group-hover:scale-[102%]"
                  />
                </div>
  
                <div className="relative flex flex-col border-t p-4 dark:border-slate-600">
            
                  <h5 className="block truncate text-xl font-semibold capitalize">
                    {item.productName}
                  </h5>

                </div>
              </a>
          ))}
        </div>
      </section>
    );
}


export default Products;