"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Mission() {
  return (
    <section className="py-24 px-8 xl:px-80 block lg:flex flex-row gap-10">
      <div className="lg:basis-1/2 relative h-96 mb-20">
        <Image
          src="/signage-1.png"
          width="638"
          height="425"
          className="absolute w-full h-full object-cover rounded-xl"
          alt="scenery"
        />
        <div className="absolute -bottom-16 left-12 bg-giants-orange p-8 lg:p-12 rounded-xl text-shady-white space-y-3">
          <FontAwesomeIcon icon={faEnvelopeOpenText} className="w-14 h-14" />
          <h3 className="text-2xl lg:text-4xl">254 M</h3>
          <h4 className="text-xl">Happy Client</h4>
        </div>
      </div>
      <div className="basis-1/2">
        <p className="font-bold tracking-[0.2em] text-giants-orange mb-5">
          EXPERTISE
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold text-oxford-blue mb-5 lg:mb-10">
          We Are Expert In Different Solutions
        </h2>
        <p className="font-medium text-darker-gray leading-loose mb-5  lg:mb-10">
          Our strength and value comes from many decades of experience, combined
          with a commitment to continually improve our manufacturing processes.
          Extensive, up-front planning is the key ingredient to managing large
          signage conversion projects. The customer’s wants, needs and
          expectations are always kept as our top priority.
        </p>
        <Link href="/">
          <button className="shadow-lg bg-oxford-blue text-light-gray px-6 py-3 hover:bg-oxford-blue/80 rounded transition ease-in-out hover:scale-90">
            More About Us
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Mission;
