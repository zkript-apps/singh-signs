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
const Clients = () => {
  const logoImages = [
    "/starbucks-logo.png",
    "/ford-logo.png",
    "/subway-logo.png",
    "/comcast-logo.png",
    "/dennys-logo.png",
    "/att-logo.png",
    "/taco-bell-logo.png",
    "/kfc-logo.png",
    "/holiday-inn-logo.png",
  ];
  return (
    <div className="pt-10 pb-20 px-6 xl:px-72 items-center">
      <div className="hidden md:flex items-center">
        <Swiper
          className="basis-4/6 mr-10"
          loop
          slidesPerView={4}
          spaceBetween={10}
          centeredSlides={false}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {logoImages.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <Image src={item} width="160" height="160" alt={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <h3 className="basis-2/6 text-2xl text-oxford-blue">
          Trusted By 500+ Valued Clients Nationwide
        </h3>
      </div>
      <div className="block md:hidden items-center">
        <Swiper
          className="basis-4/6 mb-10"
          loop
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={false}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
          {logoImages.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <Image src={item} width="160" height="160" alt={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <h3 className="basis-2/6 text-2xl text-oxford-blue text-center">
          Trusted By 500+ Valued Clients Nationwide
        </h3>
      </div>
    </div>
  );
};

export default Clients;
