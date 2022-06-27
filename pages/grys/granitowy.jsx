import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ModalImage from "react-modal-image";

const Grys = () => {
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
              Grys granitowy czarny
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
              Grys granitowy czerwony
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
              Grys granitowy szary
            </a>
          </div>

          <div
            className={
              openTab === 1 ? "flex flex-col text-center w-full" : "hidden"
            }
            class="flex flex-column text-center w-full"
          >
            <ModalImage
              small="/image/grys/szwed.jpeg"
              large="/image/grys/szwed.jpeg"
              alt="Grys granitowy czarny"
              className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            />

            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Grys granitowy czarny
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              cos tam o grysie granitowym Whatever cardigan tote bag tumblr
              hexagon brooklyn asymmetrical gentrify, subway tile poke
              farm-to-table. Franzen you probably haven't heard of them man bun
              deep jianbing selfies heirloom prism food truck ugh squid celiac
              humblebrag.
            </p>

            <span class="mr-3 text-center text-lg mt-5">Frakcje grysu</span>
            <select class="rounded border lg:w-1/5 mx-auto leading-relaxed text-base appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
              <option>0/5 {"mm"}</option>
              <option>2/9{"mm"}</option>
              <option>8/16{"mm"}</option>
              <option>16/22{"mm"}</option>
              <option>7/9{"mm"}</option>
            </select>
          </div>

          <div
            className={
              openTab === 2 ? "flex flex-col text-center w-full" : "hidden"
            }
            class="flex flex-col text-center w-full"
          >
            {/* <img
            class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            alt="grys vanga"
            width="800px"
            height="600px"
            src="/image/grys/vanga.jpeg"
          /> */}
            <ModalImage
              small="/image/grys/vanga.jpeg"
              large="/image/grys/vanga.jpeg"
              alt="Grys granitowy czerwony"
              className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            />
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Grys granitowy czerwony
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              cos tam o grysie granitowym Whatever cardigan tote bag tumblr
              hexagon brooklyn asymmetrical gentrify, subway tile poke
              farm-to-table. Franzen you probably haven't heard of them man bun
              deep jianbing selfies heirloom prism food truck ugh squid celiac
              humblebrag.
            </p>
            <span class="mr-3 text-center text-lg mt-5">Frakcje grysu</span>
            <select class="rounded border lg:w-1/5 mx-auto leading-relaxed text-base appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
              <option>0/5 {"mm"}</option>
              <option>2/9{"mm"}</option>
              <option>8/16{"mm"}</option>
              <option>16/22{"mm"}</option>
              <option>7/9{"mm"}</option>
            </select>
          </div>

          <div
            className={
              openTab === 3 ? "flex flex-col text-center w-full" : "hidden"
            }
            class="flex flex-col text-center w-full"
          >
             <ModalImage
              small="/image/grys/szary.jpg"
              large="/image/grys/szary.jpg"
              alt="Grys granitowy szara"
              className="xl:w-1/5 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            />

            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Grys granitowy szary
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              cos tam o grysie granitowym Whatever cardigan tote bag tumblr
              hexagon brooklyn asymmetrical gentrify, subway tile poke
              farm-to-table. Franzen you probably haven't heard of them man bun
              deep jianbing selfies heirloom prism food truck ugh squid celiac
              humblebrag.
            </p>
            <span class="mr-3 text-center text-lg mt-5">Frakcje grysu</span>
            <select class="rounded border lg:w-1/5 mx-auto leading-relaxed text-base appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
              <option>0/5 {"mm"}</option>
              <option>2/9{"mm"}</option>
              <option>8/16{"mm"}</option>
              <option>16/22{"mm"}</option>
              <option>7/9{"mm"}</option>
            </select>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

  

export default Grys;
