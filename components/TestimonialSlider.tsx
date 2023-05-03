"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
const TestimonialSlider = ({
  testimonies,
}: {
  testimonies: { name: String; role: String; image: String; comment: String }[];
}) => {
  return (
    <div className="py-20 px-6 xl:px-72 items-center">
      <div className="hidden lg:block">
        <Swiper
          loop
          slidesPerView={2}
          spaceBetween={50}
          centeredSlides={false}
          pagination={true}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {testimonies.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative mb-20  mt-10 ml-10">
                  <p className="text-xl text-darker-gray font-medium italic relative leading-relaxed z-20 mb-8">
                    {item.comment}
                  </p>
                  <div className="flex items-center">
                    <Image
                      className="mr-5"
                      src={`/${item.image}`}
                      width="70"
                      height="70"
                      alt="tesimonialperson"
                    />
                    <div className="">
                      <h4 className="text-xl text-oxford-blue">{item.name}</h4>
                      <p className="text-giants-orange">{item.role}</p>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="w-24 h-24 absolute -top-8 -left-8 z-10 text-light-gray"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="block lg:hidden swiper-container my-swiper">
        <Swiper
          loop
          slidesPerView={1}
          spaceBetween={50}
          centeredSlides={false}
          pagination={true}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {testimonies.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative mb-20  mt-10 ml-10">
                  <p className="text-xl text-darker-gray font-medium italic relative leading-relaxed z-20 mb-8">
                    {item.comment}
                  </p>
                  <div className="flex items-center">
                    <Image
                      className="mr-5"
                      src={`/${item.image}`}
                      width="70"
                      height="70"
                      alt="tesimonialperson"
                    />
                    <div className="">
                      <h4 className="text-xl text-oxford-blue">{item.name}</h4>
                      <p className="text-giants-orange">{item.role}</p>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="w-24 h-24 absolute -top-8 -left-8 z-10 text-light-gray"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
