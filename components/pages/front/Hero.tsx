"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronRight,
  faArrowRight,
  faSignsPost,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import Images from "@/components/Images";

const Hero = () => {
  return (
    <Fragment>
      <div className="bg-[url('/img/front-bg-photo.png')] bg-cover bg-no-repeat h-screen px-6 xl:px-80 flex flex-col">
        <div className="flex-1 flex flex-col justify-center  mb-[125px] space-y-10">
          <h3 className="text-light-gray font-medium text-2xl">
            Welcome to Fremont Sign Company!
          </h3>
          <h1 className="text-shady-white font-bold text-5xl md:text-7xl ">
            Nationwide Signage And
            <br />
            Branding Solution
          </h1>
          <p className="text-light-gray font-medium">
            Our staff will work with your designer or our in house designers
            will help
            <br />
            you make a lasting impression.
          </p>
          <div className="">
            <Link href="/services">
              <button className="shadow-lg bg-oxford-blue px-6 py-3 hover:bg-giants-orange/20 rounded transition ease-in-out hover:scale-90 text-pure-white">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
                <span className="ml-2">Learn More</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="-mt-[125px] px-6 xl:px-80  flex flex-col justify-center lg:flex-row gap-6">
        <div className="group bg-shady-white p-8 rounded-xl shadow-lg transition duration-500 hover:bg-oxford-blue space-y-3 lg:space-y-5">
          <FontAwesomeIcon
            icon={faSignsPost}
            className="h-16 w-16 text-giants-orange transition group-hover:text-shady-white"
          />
          <h3 className="text-2xl font-bold text-oxford-blue transition group-hover:text-shady-white">
            Signage
          </h3>
          <p className="text-darker-gray font-medium leading-loose transition group-hover:text-shady-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            feugiat dolor at commodo efficitur. Nullam eu nulla non lectus
            ullamcorper feugiat.
          </p>
          <Link href="/">
            <button className="font-semibold text-giants-orange hover:scale-90 transition group-hover:text-shady-white mt-5">
              Read More <FontAwesomeIcon className="w-5" icon={faArrowRight} />
            </button>
          </Link>
        </div>

        <div className="group bg-giants-orange p-8 rounded-xl shadow-lg transition duration-500 hover:bg-shady-white space-y-3 lg:space-y-5">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="h-16 w-16 text-shady-white transition group-hover:text-giants-orange"
          />
          <h3 className="text-2xl font-bold text-shady-white transition group-hover:text-oxford-blue">
            Lighting
          </h3>
          <p className="text-shady-white font-medium leading-loose transition group-hover:text-darker-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            feugiat dolor at commodo efficitur. Nullam eu nulla non lectus
            ullamcorper feugiat.
          </p>
          <Link href="/">
            <button className="font-semibold text-shady-white transition hover:scale-90 group-hover:text-giants-orange mt-5">
              Read More <FontAwesomeIcon className="w-5" icon={faArrowRight} />
            </button>
          </Link>
        </div>

        <div className="group bg-oxford-blue p-8 rounded-xl shadow-lg transition duration-500 hover:bg-shady-white space-y-3 lg:space-y-5">
          <FontAwesomeIcon
            icon={faScrewdriverWrench}
            className="h-16 w-16 text-giants-orange"
          />
          <h3 className="text-2xl font-bold text-shady-white transition group-hover:text-oxford-blue">
            Lighting
          </h3>
          <p className="text-shady-white font-medium leading-loose transition group-hover:text-darker-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            feugiat dolor at commodo efficitur. Nullam eu nulla non lectus
            ullamcorper feugiat.
          </p>
          <Link href="/">
            <button className="font-semibold text-shady-white transition hover:scale-90 group-hover:text-giants-orange mt-5">
              Read More <FontAwesomeIcon className="w-5" icon={faArrowRight} />
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
