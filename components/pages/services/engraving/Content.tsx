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
    "Here’s what we know: People will form an impression of your business based on a host of factors. One of those is the image you present with your signage. Often the first point of contact you have with potential customers, your signage speaks volumes about you and your brand. Helping our clients build brand image and communicate brand values has been our priority for more than 80 years now. From local projects to nationwide roll outs, we bring a level of custom craftsmanship, quality fabrication, creativity and collaborative customer service to every job that we’re confident you’ll find is unmatched.";

  return (
    <>
      <Hero
        iconText={iconText}
        smallTitle="Our Capabilities"
        title="Engraving"
        subTitle="Make an impression. First time. Every time."
        description={heroDesc}
        imagesNames={[
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
