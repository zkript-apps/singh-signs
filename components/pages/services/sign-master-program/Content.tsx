"use client";
import React from "react";
import Images from "@/components/Images";
import Image from "next/image";
import Hero from "@/components/Hero";

const Content = () => {
  const iconText = [
    "Exterior & Interior",
    "Digital",
    "Graphic Style",
    "Architectural & Recovery",
    "Wayfinding",
    "Pylon Signage & Conversions",
  ];
  const heroDesc =
    " A Master Sign Program (MSP) is used to create standard sign design guidelines for projects with multiple buildings or tenants. Once a MSP is approved, tenants receive approval for their individual signs at staff level instead of having to go through the Design Review process each time. Our sign designers team up with architects and engineers write up and show all tenant space with guidance for signs to meet the city guidelines and regulations by the code. overall continuity between the signs and the building Any Commercial, Office, or Industrial project with more than one building or multi tenant shopping center required MSP The Planning Commission makes the decision on Master Sign Programs";

  return (
    <>
      <Hero
        iconText={iconText}
        smallTitle="Our Capabilities"
        title="Permits"
        subTitle="Business need to be legal all the time."
        description={heroDesc}
        imagesNames={[
          "sign-program.png",
          "parking1.jpg",
          "parking2.jpg",
          "parking3.jpg",
          "parking4.jpg",
        ]}
      />
    </>
  );
};

export default Content;
