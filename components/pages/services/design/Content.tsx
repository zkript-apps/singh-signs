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
    "All public sector buildings will typically have signage inside and outside of their establishments. This may range from signs for the toilets to health and safety signs. The following signage design guidance is based on the ‘Building for Everyone: A Universal Design approach’ publication from the Centre for Excellence in Universal Design (CEUD). Under the Official Languages Act 2003, a public body has a duty to ensure that signs placed by it or on its behalf within or outside the state are in Irish or bilingual. If bilingual text is chosen, instead of text in Irish only, there are specific regulations that must be adhered to.";
  return (
    <>
      <Hero
        iconText={iconText}
        smallTitle="Our Capabilities"
        title="Design"
        subTitle="Make an impression. First time. Every time."
        description={heroDesc}
        imagesNames={[
          "designing.jpg",
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
