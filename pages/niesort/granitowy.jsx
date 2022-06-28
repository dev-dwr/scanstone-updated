import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import SimpleImageSlider from "react-simple-image-slider";

const Niesort = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const imageBlack = ["/image/niesort/czerwony.jpeg"];
  const imageRed = ["/image/niesort/czerwony.jpeg"];
  const imageGrey = ["/image/niesort/szary.jpeg"];
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex justify-center mx-auto flex-wrap mb-20">
            <a
              onClick={(e) => {
                e.preventDefault();
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
          <div className = {openTab === 1 ? "lg:w-4/5 mx-auto flex flex-wrap" : "hidden"}>
          <SimpleImageSlider
              width={400}
              height={400}
              images={imageBlack}
              showBullets={true}
              showNavs={true}
              autoPlay
            />
  
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                Niesort granitowy 
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              Niesort granitowy czarny
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
              </div>
              <p class="leading-relaxed">
                cos tam o tych plytach cos tam o tych plytachcos tam o tych
                plytachcos tam o tych plytachcos tam o tych plytachcos tam o
                tych plytachcos tam o tych plytach cos tam o tych plytachcos tam
                o tych plytachcos tam o tych plytachcos tam o tych plytachcos
                tam o tych plytachcos tam o tych plytachcos tam o tych
                plytachcos tam o tych plytach
              </p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex ml-6 items-center"></div>
              </div>
              <div class="flex">
                <Link href="/contact">
                  <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Skontaktuj sie
                  </button>
                </Link>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className = {openTab === 2 ? "lg:w-4/5 mx-auto flex flex-wrap" : "hidden"}>
            <SimpleImageSlider
              width={400}
              height={400}
              images={imageRed}
              showBullets={true}
              showNavs={true}
              autoPlay
            />

            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                Niesort granitowy 
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              Niesort granitowy czerwony
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
              </div>
              <p class="leading-relaxed">
                cos tam o tych plytach cos tam o tych plytachcos tam o tych
                plytachcos tam o tych plytachcos tam o tych plytachcos tam o
                tych plytachcos tam o tych plytach cos tam o tych plytachcos tam
                o tych plytachcos tam o tych plytachcos tam o tych plytachcos
                tam o tych plytachcos tam o tych plytachcos tam o tych
                plytachcos tam o tych plytach
              </p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex ml-6 items-center"></div>
              </div>
              <div class="flex">
                <Link href="/contact">
                  <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Skontaktuj sie
                  </button>
                </Link>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className = {openTab === 3 ? "lg:w-4/5 mx-auto flex flex-wrap" : "hidden"}>
            <SimpleImageSlider
              width={400}
              height={400}
              images={imageGrey}
              showBullets={true}
              showNavs={true}
              autoPlay
            />

            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                Niesort granitowy 
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              Niesort granitowy szary
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
              </div>
              <p class="leading-relaxed">
                cos tam o tych plytach cos tam o tych plytachcos tam o tych
                plytachcos tam o tych plytachcos tam o tych plytachcos tam o
                tych plytachcos tam o tych plytach cos tam o tych plytachcos tam
                o tych plytachcos tam o tych plytachcos tam o tych plytachcos
                tam o tych plytachcos tam o tych plytachcos tam o tych
                plytachcos tam o tych plytach
              </p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex ml-6 items-center"></div>
              </div>
              <div class="flex">
                <Link href="/contact">
                  <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Skontaktuj sie
                  </button>
                </Link>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

{
  /* <div className={openTab === 1 ? "lg:w-4/5 mx-auto flex flex-wrap" : "hidden"}>
            
<ModalImage
  small="/image/niesort/czerwony.jpeg"
  large="/image/niesort/czerwony.jpeg"
  alt="niesort czarny"
  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
/>
<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

<h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
<h1 class="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
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
</div> */
}
{
  /* <div
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
</div> */
}

export default Niesort;
