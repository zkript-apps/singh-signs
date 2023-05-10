import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAVIGATION_MENU } from "@/helpers/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faCreditCard } from "@fortawesome/free-regular-svg-icons";

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
          <div className="py-10 lg:py-16 flex flex-col items-center lg:items-start m-auto w-full text-shady-white space-y-4">
            <p className="font-bold text-shady-white tracking-[0.2em]">
              GOT A QUESTION?
            </p>

            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              We’re here to help
            </h2>
            <label
              htmlFor="subscribe"
              className="text-xl text-giants-orange font-bold"
            >
              Send us an email or call us at 510-573-3162
            </label>
            <div className="flex flex-col justify-center lg:justify-start sm:flex-row w-full sm:space-x-5">
              <Link
                href="/contact"
                className="shadow-lg mt-8 bg-oxford-blue text-light-gray px-6 py-3 hover:bg-oxford-blue/80 rounded transition ease-in-out hover:scale-90"
              >
                GET IN TOUCH
                <FontAwesomeIcon className="h-5 ml-2" icon={faCommentDots} />
              </Link>
              <Link
                href="/make-payment"
                className="shadow-lg mt-8 bg-giants-orange text-light-gray px-6 py-3 hover:bg-giants-orange/80 rounded transition ease-in-out hover:scale-90"
              >
                MAKE PAYMENT
                <FontAwesomeIcon className="h-5 ml-2" icon={faCreditCard} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 xl:px-80 py-14 bg-oxford-blue divide-y divide-giants-orange">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-0 items-start mb-20">
          {/* start */}
          <div className="w-full lg:w-3/12 lg:mr-12">
            <div className="flex mb-3">
              <Image
                src="/img/logo.png"
                width="53"
                height="79"
                alt="Main Logo"
              />
              <Image
                className="my-4"
                src="/img/textLogo.png"
                width="207"
                height="50"
                alt="Main Logo"
              />
            </div>
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
                  <li key={index}>
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
              <FontAwesomeIcon
                icon={faCopyright}
                className="ml-1 w-4 h-4"
              />{" "}
              All Right Reserved
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
