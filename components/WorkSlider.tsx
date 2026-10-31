"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { profile, projects } from "@/lib/data";

const chunk = <T,>(items: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(items.length / size) }, (_, i) =>
    items.slice(i * size, i * size + size),
  );

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      autoHeight
      className="pb-10 sm:pb-0 sm:h-120"
    >
      {chunk(projects, 4).map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {slide.map((project) => (
              <div
                key={project.title}
                className="relative rounded-lg overflow-hidden group bg-[rgba(65,47,123,0.15)] p-5 min-h-36 sm:min-h-52 flex flex-col justify-between"
              >
                <div>
                  <div className="text-accent text-xs tracking-[0.2em] mb-2">
                    {project.label}
                  </div>
                  <div className="text-base sm:text-lg leading-snug">{project.title}</div>
                  <p className="hidden sm:block text-sm leading-normal mt-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="text-[11px] border border-white/20 rounded-full px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="absolute inset-0 bg-linear-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-70 transition-all duration-700 pointer-events-none"
                  aria-hidden
                />
                <Link
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="absolute bottom-4 right-4 flex items-center gap-x-2 text-[13px] tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  GITHUB <BsArrowRight aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
