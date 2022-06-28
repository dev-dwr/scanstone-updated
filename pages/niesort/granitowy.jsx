import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ModalImage from "react-modal-image";
import Link from "next/link";
const Niesort = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <div class="flex mx-auto flex-wrap mb-20">
            <a
              onClick={(e) => {
               // e.preventDefault();
                setOpenTab(1);
              }}
              className={
                openTab === 1
                  ? "hover:cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center hover:pointer-events-auto sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t"
                  : "hover:cursor-pointer  sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
              }
            >
              Niesort czarny
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              className={
                openTab === 2
                  ? "hover:cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center hover:pointer-events-auto sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t"
                  : "hover:cursor-pointer  sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
              }
            >
              Niesort czerwony
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              className={
                openTab === 3
                  ? "hover:cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center hover:pointer-events-auto sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t"
                  : "hover:cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
              }
            >
              Niesort szary
            </a>
          </div>

          <div
            className={
              openTab === 1 ? "flex flex-col grow text-center w-full" : "hidden"
            }
          >
            <ModalImage
              small="/image/niesort/czerwony.jpeg"
              large="/image/niesort/czerwony.jpeg"
              alt="niesort czarny"
              className="xl:w-1/3 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            />
            
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Niesort czarny
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              cos tam o grysie granitowym Whatever cardigan tote bag tumblr
              hexagon brooklyn asymmetrical gentrify, subway tile poke
              farm-to-table. Franzen you probably haven't heard of them man bun
              deep jianbing selfies heirloom prism food truck ugh squid celiac
              humblebrag.
            </p>
            <Link href="/contact">
                  <button class="flex mx-auto  mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Skontaktuj sie
                  </button>
              </Link>
          </div>

          <div
            className={
              openTab === 2 ? "flex flex-col text-center w-full" : "hidden"
            }
            class="flex flex-col text-center w-full"
          >
     
            <ModalImage
              small="/image/niesort/czerwony.jpeg"
              large="/image/niesort/czerwony.jpeg"
              alt="Grys granitowy czerwony"
              className="xl:w-1/3 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            />
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Niesort czerwony
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              cos tam o grysie granitowym Whatever cardigan tote bag tumblr
              hexagon brooklyn asymmetrical gentrify, subway tile poke
              farm-to-table. Franzen you probably haven't heard of them man bun
              deep jianbing selfies heirloom prism food truck ugh squid celiac
              humblebrag.
            </p>
            <Link href="/contact">
                  <button class="flex mx-auto  mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Skontaktuj sie
                  </button>
              </Link>
          </div>

          <div
            className={
              openTab === 3 ? "flex flex-col text-center w-full" : "hidden"
            }
            class="flex flex-col text-center w-full"
          >
             <ModalImage
              small="/image/niesort/szary.jpeg"
              large="/image/niesort/szary.jpeg"
              alt="niesort szara"
              className="xl:w-1/3 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            />

            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Niesort szary
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              cos tam o grysie granitowym Whatever cardigan tote bag tumblr
              hexagon brooklyn asymmetrical gentrify, subway tile poke
              farm-to-table. Franzen you probably haven't heard of them man bun
              deep jianbing selfies heirloom prism food truck ugh squid celiac
              humblebrag.
            </p>
            <Link href="/contact">
                  <button class="flex mx-auto  mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Skontaktuj sie
                  </button>
              </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

  

export default Niesort;
