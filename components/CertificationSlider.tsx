"use client";

import { RxArrowTopRight } from "react-icons/rx";
import { HiAcademicCap } from "react-icons/hi2";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { certifications } from "@/lib/data";

const CertificationSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-72 sm:h-96"
    >
      {certifications.map((item) => (
        <SwiperSlide key={item.title}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-4xl text-accent mb-4">
              <HiAcademicCap aria-hidden />
            </div>
            <div className="mb-6">
              <div className="text-xs tracking-widest text-white/50 mb-2">{item.date}</div>
              <div className="mb-2 text-base leading-snug">{item.title}</div>
              <p className="text-sm leading-normal">{item.issuer}</p>
              {item.id && <p className="text-[11px] mt-2 text-white/40">ID : {item.id}</p>}
            </div>
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CertificationSlider;
