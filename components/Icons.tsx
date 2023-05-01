"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Icons = ({ iconText }: { iconText: string[] }) => {
  return (
    <div className="bg-[url('/service-bg.png')] bg-no-repeat bg-cover text-shady-white">
      <div className="w-full md:w-1/2 lg:w-72 bg-oxford-blue/80 p-8">
        <h3 className="text-2xl mb-5">The Advantages Of This Service</h3>
        <ul className="text-medium space-y-4">
          {iconText.map((menu, index) => {
            return (
              <li className="flex items-center">
                <FontAwesomeIcon
                  className="w-3.5 mr-5 text-giants-orange"
                  icon={faArrowRight}
                />
                <p className="font-medium transition hover:text-giants-orange">
                  {menu}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Icons;
