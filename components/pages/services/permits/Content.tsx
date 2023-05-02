"use client";
import React from "react";
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
    "In order to open a business, there is a long list of business licenses and permits that a new establishment must obtain. But when you decided to become a business owner, you were up for the challenge. While a sign permit for your business may seem like a minor detail, when you think about how important it is in the grand scheme of your business design, it’s best to make sure it’s squared away.";
  return (
    <>
      <Hero
        iconText={iconText}
        smallTitle="Our Capabilities"
        title="Permits"
        subTitle="Business need to be legal all the time."
        description={heroDesc}
        imagesNames={[
          "permits.png",
          "mountain-works.png",
          "ds-works.png",
          "subway-works.png",
          "wine-works.png",
        ]}
      />
    </>
  );
};

export default Content;
