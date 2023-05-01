"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Menu = ({
  name,
  url,
  subMenu,
}: {
  name: string;
  url: string;
  subMenu: { name: string; url: string }[];
}) => {
  const pathname = usePathname();

  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
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
    <motion.div
      className="z-50"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
    >
      <Link
        href={url}
        className={`font-semibold text-sm group-hover:text-giants-orange flex items-center ${
          pathname === url ? "text-giants-orange" : "text-pure-white"
        }`}
        onClick={() => toggleHoverMenu()}
      >
        <span className="mr-2">{name}</span>
        {name === "HOME" ? (
          ""
        ) : (
          <FontAwesomeIcon className="w-3.5" icon={faChevronDown} />
        )}
      </Link>
      {subMenu.length > 0 && (
        <motion.div
          className="bg-oxford-blue shadow-md py-4 absolute"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div className="flex flex-col">
            {subMenu.map((item, index) => {
              return (
                <a
                  href={item.url}
                  onClick={() => toggleHoverMenu()}
                  className="text-pure-white hover:bg-pure-white/20 px-6 py-2 text-sm"
                  key={index}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Menu;
