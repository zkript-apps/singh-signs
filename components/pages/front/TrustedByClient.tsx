"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faUsersGear,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

function TrustedByClient() {
  const trustedByClientImages = [
    "trustedByClient-1.png",
    "trustedByClient-2.jpg",
    "trustedByClient-3.jpg",
  ];

  return (
    <div className="md:flex w-full relative">
      <div className="basis-1/2 py-20 p-8 2xl:pl-80 xl:pr-24 xl:py-20 bg-oxford-blue space-y-8 text-shady-white">
        <p className="font-bold tracking-[0.2em] text-giants-orange">
          GET TRUSTED BY OUR CLIENT
        </p>
        <h2 className="text-3xl lg:text-5xl">
          We Are Ready to Serve Your Solution
        </h2>
        <p className="font-medium leading-relaxed">
          At our company, we are committed to providing top-quality solutions
          that meet the unique needs of our clients. Whether you need signage,
          lighting, or maintenance services, our team of experts is ready to
          help you achieve your goals.
        </p>
        <div className="flex justify-between">
          <div>
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              className="w-11 h-11 mb-5 mt-7 text-giants-orange"
            />
            <h4 className="text-xl mb-2">Standby 24 Hours</h4>
            <p className="font-medium">24/7 Commercial Service</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faUsersGear}
              className="w-11 h-11 mb-5 mt-7 text-giants-orange"
            />
            <h4 className="text-xl">We Local Presence</h4>
            <p className="font-medium">Local Offices and Technicians</p>
          </div>
        </div>
      </div>
      <Swiper
        className="basis-1/2"
        loop
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        pagination={false}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {trustedByClientImages.map((item, index) => {
          return (
            <SwiperSlide key={index} className="m-auto">
              <Image
                className="object-cover w-full h-full"
                src={`/${item}`}
                width="928"
                height="625"
                alt={item}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute bottom-0 z-30 right-0 bg-giants-orange p-8 lg:p-12 rounded-l-xl rounded-tr-xl text-shady-white space-y-3">
        <FontAwesomeIcon icon={faHandshake} className="w-14 h-14" />
        <h3 className="text-2xl lg:text-4xl">6k+ Projects</h3>
        <h4 className="text-xl">Happy Client</h4>
        <p className="font-medium">
          Extensive portfolio of completed <br /> projects showcases our
          expertise
        </p>
      </div>
    </div>
  );
}

export default TrustedByClient;
