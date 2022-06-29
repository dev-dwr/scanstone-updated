import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import SimpleImageSlider from "react-simple-image-slider";

const Curbs = () => {
  const imageBlack = ["/image/curbs/curb1.jpeg", "/image/curbs/curb2.jpeg"];

  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div className = "lg:w-4/5 mx-auto flex flex-wrap">
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
              Krawężniki granitowe
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              Krawężniki granitowe
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
                <div class="flex ml-6 items-center">
            
    
                </div>
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
            <div class="relative mt-12 mx-auto overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full  mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Typ krawęnika
                </th>
                <th scope="col" class="px-6 py-3">
                szerokość
                </th>
                <th scope="col" class="px-6 py-3">
                główka
                </th>
                <th scope="col" class="px-6 py-3">
                wysokość
                </th>
                <th scope="col" class="px-6 py-3">
                długość
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                A1
                </th>
                <td class="px-6 py-4">
                300
                </td>
                <td class="px-6 py-4">
                270
                </td>
                <td class="px-6 py-4">
                250
                </td>
                <td class="px-6 py-4">
                800 - 1500
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                A2
                </th>
                <td class="px-6 py-4">
                180
                </td>
                <td class="px-6 py-4">
                    150
                </td>
                <td class="px-6 py-4">
            250
                </td>
                <td class="px-6 py-4 text-right">
                800 - 1500
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                A3
                </th>
                <td class="px-6 py-4">
                180
                </td>
                <td class="px-6 py-4">
                150
                </td>
                <td class="px-6 py-4">
                300
                </td>
                <td class="px-6 py-4 text-right">
                800 - 1500
                </td>
            </tr>
        </tbody>
    </table>
</div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};


export default Curbs;
