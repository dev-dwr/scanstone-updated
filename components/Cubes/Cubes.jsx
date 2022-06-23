import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../Button/Button";
import { Chip } from "../Chip/Chip";
import 'swiper/css';

const cubes = [
  "Kostka czerwona Vanga",
  "Kostka czarna Szwed",
  "Kostka granitowa Szara",
  "Kostka granitowa Szaro-Ruda",
  "Kostka granitowa Gnejs",
  "Kostka brązowa Bohus",
];

const cubesItems = [
  {
    jobTitle: "Kostka czerwona Vanga",
    image: "/image/kostka-czerwona.jpg",
  },
  {
    jobTitle: "Kostka czarna Szwed",
    image: "/image/czarna.jpg",
  },
  {
    jobTitle: "Kostka granitowa Szara",
    image: "/image/szara.jpg",
  },
  {
    jobTitle: "Kostka Szaro-Ruda",
    image: "/image/szaro-ruda.jpg",
  },
  {
    jobTitle: "Kostka granitowa Gnejs",
    image: "/image/gnejs.jpg",
  },
  {
    jobTitle: "Kostka brązowa Bohus",
    image: "/image/bohus.jpg",
  }
];

  const Cubes = () => {
    return (
      <section id="featured-jobs">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Nasze kostki do zaoferowania</h2>
        <Button variant="outline" className="hidden xs:inline-flex">
          Show All
        </Button>
      </div>
      <div className="mb-4">
        <Swiper
          modules={[FreeMode, Scrollbar, Mousewheel]}
          direction="horizontal"
          freeMode={true}
          mousewheel={true}
          scrollbar={{ draggable: true, hide: true }}
          slidesPerView="auto"
          spaceBetween={15}
          className="!py-4"
        >
          {cubes.map((item, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <Chip label={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* !-m-4 to fix box-shadow cropping due to overflow:hidden */}
      <div id="featured-jobs__items" className="!-m-4">
        <Swiper
          className="!p-4 !-m-4" // !p-4 to fix box-shadow cropping due to overflow:hidden
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            "475": {
              slidesPerView: 2,
            },
            "640": {
              slidesPerView: 3,
            },
            "1024": {
              slidesPerView: 4,
            },
          }}
        >
          {cubesItems.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href="/#">
                <a className="group block overflow-hidden rounded-2xl border border-slate-200
                 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
                  <div className="relative block overflow-hidden  pt-[70%]">
                    <Image
                      src={item.image}
                      alt={item.companyName}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-200 group-hover:scale-[102%]"
                    />
                  </div>

                  <div className="flex flex-col border-t p-4 dark:border-slate-600">
                    <h5 className="block truncate text-xl font-semibold capitalize">
                      {item.jobTitle}
                    </h5>
                    <span className="block truncate text-slate-500 dark:text-slate-400">
                      {item.companyName}
                    </span>
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    );
  };


  export default Cubes;