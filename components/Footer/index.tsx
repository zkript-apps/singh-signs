import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAVIGATION_MENU } from "@/helpers/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="bg-[url('/topFooterImage.png')] lg:mt-28 bg-cover bg-no-repeat bg-opacity-50 bg-oxford-blue ">
        <div className="flex flex-col-reverse lg:flex-row max-w-7xl	m-auto px-6">
          <div className="relative w-full m-auto lg:m-0 max-w-md lg:ml-20">
            <Image
              className="lg:absolute bottom-0 m-auto lg:m-0"
              width="326"
              height="490"
              src="/newsletterMan.png"
              alt="newsletterMan"
            />
          </div>
          <div className="py-10 lg:py-16 flex flex-col m-auto w-full text-shady-white space-y-4">
            <p className="font-bold text-shady-white tracking-[0.2em]">
              NEWSLETTER
            </p>

            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Subscribe Our Newsletter & Get Discount
            </h2>
            <label
              htmlFor="subscribe"
              className="text-xl text-giants-orange font-bold"
            >
              Subscribe Blocks Newsletter
            </label>
            <div className="flex flex-col sm:flex-row w-full">
              <input
                type="email"
                id="subscribe"
                className="p-2 rounded-md flex-1 mr-4 mb-5 sm:mb-0 w-full text-black font-semibold m-w-[463px]  placeholder-slate-300 placeholder:font-bold outline-none border-2 focus:border-blue-400"
                placeholder="Email"
              />
              <button
                type="button"
                className="bg-giants-orange p-2 sm:p-3.5 rounded-md font-semibold transition duration-300 hover:bg-transparent border-2 border-giants-orange"
              >
                Subscribe Now{" "}
                <FontAwesomeIcon
                  className="h-3.5 -mr-1"
                  icon={faChevronRight}
                />
                <FontAwesomeIcon className="h-3.5" icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 xl:px-80 py-14 bg-oxford-blue divide-y divide-giants-orange">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-0 items-start mb-20">
          {/* start */}
          <div className="w-full lg:w-3/12 lg:mr-12">
            <Image
              src="/fremont_logo_white.png"
              width="320"
              height="210"
              alt="Main Logo"
            />
            <p className="text-shady-white font-medium  mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar.
            </p>
            <div className="flex-1 mt-4">
              <Link href="https://www.facebook.com/fremontsigncompany/">
                <FontAwesomeIcon
                  className="w-8 h-8 text-giants-orange transition hover:text-shady-white hover:scale-110"
                  icon={faFacebook}
                />
              </Link>
            </div>
          </div>

          <div className="text-shady-white lg:w-3/12">
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <div className="border-b border-giants-orange w-14 my-5" />
            <ul className="text-medium space-y-4">
              {NAVIGATION_MENU.map((menu, index) => {
                let str = menu.name;
                str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
                return (
                  <li>
                    <Link href={menu.url} className="flex items-center">
                      <FontAwesomeIcon
                        className="w-3.5 mr-5 text-giants-orange"
                        icon={faArrowRight}
                      />
                      <p className="font-medium transition hover:text-giants-orange">
                        {str}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="text-shady-white lg:w-3/12">
            <h3 className="text-2xl font-bold mb-2">Our Services</h3>
            <div className="border-b border-giants-orange w-20 my-5" />
            <ul className="text-medium space-y-4">
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
                          <p className="font-medium transition hover:text-giants-orange">
                            {str}
                          </p>
                        </Link>
                      </li>
                    );
                  });
                }
              )}
            </ul>
          </div>

          <div className="text-shady-white lg:w-3/12">
            <h3 className="text-2xl font-bold mb-2">Find Us</h3>
            <div className="border-b border-giants-orange w-24 my-5" />
            <ul className="text-medium space-y-5">
              <li className="mt-2">
                <h3 className="text-lg font-bold">
                  44279 Fremont Blvd. Unit P Fremont, CA 94538
                </h3>
              </li>
              <li>
                <h3 className="text-lg font-medium text-giants-orange">
                  510-573-3162
                </h3>
              </li>
              <li>
                <p className="text-base">fremontsigncompany@gmail.com</p>
              </li>
            </ul>
          </div>

          {/* end */}
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-end items-center">
          <div className="flex gap-3 divide-x divide-white mt-10 font-medium">
            <Link
              href="/about"
              className="text-light-gray text-right font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-light-gray font-medium text-right pl-2"
            >
              Contact
            </Link>
            <p className="text-light-gray text-right pl-2 font-medium">
              Copyright {new Date().getFullYear()}
              <FontAwesomeIcon icon={faCopyright} /> All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </>
    // FIX RESPONSIVENESS OF MAIN NAV AND FOOTER
    // ADD SCROLL TO TOP BUTTON
  );
};

export default Footer;
