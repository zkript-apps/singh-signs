"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHammer,
  faPlusMinus,
  faPenNib,
  faFileLines,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { NAVIGATION_MENU } from "@/helpers/constants";

const Services = () => {
  const description = [
    "Here’s what we know: People will form an impression of your business based on a...",
    "When you think of signage engineering you might think of the structure of your...",
    "All public sector buildings will typically have signage inside and outside of their...",
    "In order to open a business, there is a long list of business licenses and  permits that...",
    "A Master Sign Program (MSP) is used to create standard sign design guidelines...",
  ];

  return (
    <div className="xl:flex flex-row justify-center">
      <div className="py-20 p-8 2xl:pl-80 xl:pr-24 xl:py-20 text-shady-white bg-oxford-blue">
        <p className="font-bold tracking-[0.2em] text-giants-orange mb-5">
          OUR SERVICES
        </p>
        <h2 className="text-3xl lg:text-5xl mb-10">
          We Do It All. We Do It Right. We Do It On Time.
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 xl:gap-y-16 gap-10">
          {NAVIGATION_MENU.filter((link) => link.name == "SERVICES").map(
            (menu, item) => {
              return menu.subMenu.map((subMenu, index) => {
                let str = subMenu.name;
                str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
                let servicesIcon = [
                  faHammer,
                  faPlusMinus,
                  faPenNib,
                  faFileLines,
                  faSignature,
                ];
                return (
                  <li className="space-y-3" key={index}>
                    <FontAwesomeIcon
                      icon={servicesIcon[index]}
                      className="w-11 h-11 text-giants-orange"
                    />
                    <h3 className="text-2xl">{str}</h3>
                    <p className="text-light-gray font-medium leading-relaxed">
                      {description[index]}
                    </p>
                    <Link href={`${subMenu.url}`}>
                      <button className="font-semibold text-shady-white hover:scale-90 transition hover:text-giants-orange mt-3">
                        Read More{" "}
                        <FontAwesomeIcon
                          className="w-5 h-4"
                          icon={faArrowRight}
                        />
                      </button>
                    </Link>
                  </li>
                );
              });
            }
          )}
        </ul>
      </div>
      <Image
        src="/servicesMan.png"
        className="object-cover hidden xl:block"
        width="666"
        height="809"
        alt="services"
      />
    </div>
  );
};

export default Services;
