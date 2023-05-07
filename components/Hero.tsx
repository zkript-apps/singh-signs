"use client";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faArrowRight,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { NAVIGATION_MENU } from "@/helpers/constants";
import Icons from "./Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Hero = ({
  title,
  subTitle,
  description,
  imagesNames,
  iconText,
}: {
  smallTitle: string;
  title: string;
  subTitle: string;
  description: string;
  imagesNames: string[];
  iconText: string[];
}) => {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-20 gap-8 py-20 px-6 xl:px-80 items-start">
      <div className="lg:col-start-1 lg:col-end-15 space-y-5">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className=" rounded-xl"
        >
          {imagesNames.map((name, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  className={`object-cover w-full h-[509px] ${
                    name == "ds-works.png" ? "object-top" : "object-center"
                  }`}
                  src={`/${name}`}
                  width="900"
                  height="509"
                  alt="Message"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <h2 className="text-3xl lg:text-5xl text-oxford-blue">{title}</h2>
        <p className="relative text-xl italic text-darker-gray bg-light-gray/50 p-5 rounded-md">
          &quot;{subTitle}&quot;
          <span>
            <FontAwesomeIcon
              icon={faQuoteRight}
              className="absolute -bottom-8 right-8 h-20 w-20 text-giants-orange"
            />
          </span>
        </p>
        <p className="text-darker-gray font-medium leading-relaxed pt-10">
          {description}
        </p>
        <Icons iconText={iconText} />
      </div>

      <div className="lg:col-start-15 lg:col-end-21 space-y-7">
        <div className="bg-oxford-blue p-8 rounded-lg">
          <h3 className="text-2xl text-light-gray">Recent Services</h3>
          <div className="border-b border-giants-orange w-20 my-5" />
          <ul className="text-medium space-y-3 text-light-gray">
            {NAVIGATION_MENU.filter((link) => link.name == "SERVICES").map(
              (menu, item) => {
                return menu.subMenu.map((subMenu, index) => {
                  let str = subMenu.name;
                  str =
                    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
                  return (
                    <li key={index}>
                      <Link href={subMenu.url} className="flex items-center">
                        <FontAwesomeIcon
                          className="w-3.5 mr-5 text-giants-orange"
                          icon={faArrowRight}
                        />
                        <h4
                          className={`text-xl font-medium transition hover:text-giants-orange ${
                            pathname == subMenu.url ? "text-giants-orange" : ""
                          }`}
                        >
                          {str}
                        </h4>
                      </Link>
                    </li>
                  );
                });
              }
            )}
          </ul>
        </div>
        <div className="bg-[url('/make-appointment-bg.png')] rounded-lg p-8 space-y-5">
          <FontAwesomeIcon
            className="w-20 h-20 text-giants-orange"
            icon={faHeartPulse}
          />
          <h2 className="text-shady-white text-3xl lg:text-4xl">
            Making Your Life Easier
          </h2>
        </div>

        <div className="bg-oxford-blue p-8 rounded-lg">
          <h3 className="text-2xl text-light-gray">Follow Us On</h3>
          <div className="border-b border-giants-orange w-20 my-5" />
          <FontAwesomeIcon
            className="w-6 h-6 text-giants-orange transition hover:text-shady-white hover:scale-110"
            icon={faFacebook}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
