"use client";
import { NAVIGATION_MENU } from "@/helpers/constants";
import Image from "next/image";
import React, { useState } from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.2,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <div className="fixed w-full z-50">
      <div className="bg-oxford-blue px-6 py-2 hidden md:block">
        <div className="max-w-[1700px] mx-auto flex">
          <div className="flex-1">
            <h4 className="text-shady-white text-base">Fremont, CA 94538</h4>
          </div>
          <div>
            <h4 className="text-shady-white text-base">
              510-573-3162 | fremontsigncompany@gmail.com
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-shady-white flex items-center justify-center px-6 py-2 shadow-md">
        <div className=" flex items-center max-w-[1700px] w-full mx-auto">
          <div className="flex-1">
            <Link href="/" className="flex">
              <Image
                className="my-1"
                src="/img/singhsignsLogo.png"
                width="255"
                height="78"
                alt="Main Logo"
              />
            </Link>
          </div>
          <div className="hidden gap-y-10 gap-x-5 2xl:gap-x-10 xl:flex">
            {NAVIGATION_MENU.map((menu, index) => {
              return (
                <Menu
                  key={index}
                  name={menu.name}
                  url={menu.url}
                  subMenu={menu.subMenu}
                />
              );
            })}
          </div>
          <div className="flex xl:hidden">
            <FontAwesomeIcon
              icon={isMenuOpen ? faBarsStaggered : faBars}
              className="h-6 w-6 hover:cursor-pointer text-pure-white bg-giants-orange p-3 rounded-sm hover:text-giants-orange hover:bg-pure-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>
      <motion.div
        className="bg-oxford-blue shadow-lg py-3 px-6 absolute w-full h-screen overflow-y-auto"
        initial="exit"
        animate={isMenuOpen ? "enter" : "exit"}
        variants={subMenuAnimate}
      >
        <div className="flex flex-col">
          {NAVIGATION_MENU.map((menu, index) => {
            return (
              <MobileMenu
                key={index}
                name={menu.name}
                url={menu.url}
                subMenu={menu.subMenu}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default MainNavigation;
