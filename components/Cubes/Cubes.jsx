import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../Button/Button";
import { Chip } from "../Chip/Chip";
import "swiper/css";

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
    name: "Kostka czerwona Vanga",
    image: "/image/cubes/kostka-czerwona.jpg",
    link: "/cubes/vanga",
  },
  {
    name: "Kostka czarna Szwed",
    image: "/image/cubes/czarna.jpg",
    link: "/cubes/szwed",
  },
  {
    name: "Kostka granitowa Szara",
    image: "/image/cubes/szara.jpg",
    link: "/cubes/szara",
  },
  {
    name: "Kostka Szaro-Ruda",
    image: "/image/cubes/szaro-ruda.jpg",
    link: "/cubes/szaro-ruda",
  },
  {
    name: "Kostka granitowa Gnejs",
    image: "/image/cubes/gnejs.jpg",
    link: "/cubes/gnejs",
  },
  {
    name: "Kostka brązowa Bohus",
    image: "/image/cubes/bohus.jpg",
    link: "/cubes/bohus",
  },
];

const Cubes = ({ mainRef }) => {
  return (
    <section ref={mainRef}>
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
          {cubesItems.map((item, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <Link href={item.link}>
                <Chip label={item.name} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="!-m-4">
        <Swiper
          className="!p-4 !-m-4"
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            475: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {cubesItems.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href={item.link}>
                <a
                  className="group block overflow-hidden rounded-2xl border border-slate-200
                 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700"
                >
                  <div className="relative block overflow-hidden  pt-[70%]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-200 group-hover:scale-[102%]"
                    />
                  </div>

                  <div className="flex flex-col border-t p-4 dark:border-slate-600">
                    <h5 className="block truncate text-xl font-semibold capitalize">
                      {item.name}
                    </h5>
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
