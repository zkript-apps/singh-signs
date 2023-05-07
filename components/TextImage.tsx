"use client";
import Image from "next/image";
import React from "react";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const TextImage = ({
  imageName,
  title,
  description,
  id,
}: {
  imageName: string;
  title: string;
  description: string[];
  id?: string;
}) => {
  return (
    <div
      id={id}
      className="flex flex-col xl:flex-row py-20 gap-12 px-6 xl:px-80 items-center xl:items-start"
    >
      <div className="flex-none relative mb-10 xl:mb-0">
        <Image
          className="rounded-xl"
          src={`/${imageName}`}
          width="550"
          height="550"
          alt="Works"
        />
        <div className="absolute -bottom-16 left-12 bg-giants-orange p-8 lg:p-12 rounded-xl text-shady-white space-y-3">
          <FontAwesomeIcon icon={faEnvelopeOpenText} className="w-14 h-14" />
          <h3 className="text-2xl lg:text-4xl">254 M</h3>
          <h4 className="text-xl">Happy Client</h4>
        </div>
      </div>
      <div className="space-y-5 lg:space-y-10">
        <h2 className="text-3xl lg:text-5xl font-bold text-oxford-blue">
          {title}
        </h2>
        {description.map((desc, index) => {
          return (
            <p key={index} className="font-medium text-darker-gray">
              {desc}
            </p>
          );
        })}
        <Link href="/">
          <button className="shadow-lg bg-oxford-blue mt-5 lg:mt-10 text-light-gray px-6 py-3 hover:bg-oxford-blue/80 rounded transition ease-in-out hover:scale-90">
            More About Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TextImage;
