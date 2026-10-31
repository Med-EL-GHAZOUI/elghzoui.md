"use client";

import type { IconType } from "react-icons";
import {
  RxArrowTopRight,
  RxCode,
  RxDesktop,
  RxLayers,
  RxMixerHorizontal,
  RxRocket,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { expertises } from "@/lib/data";

const icons: IconType[] = [RxDesktop, RxCode, RxLayers, RxMixerHorizontal, RxRocket];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      freeMode
      autoHeight
      className="pb-10 sm:pb-0 sm:h-96"
    >
      {expertises.map((item, i) => {
        const Icon = icons[i % icons.length];
        return (
          <SwiperSlide key={item.title}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">
                <Icon aria-hidden />
              </div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-87.5 leading-normal">{item.description}</p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                  aria-hidden
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
