import React from "react";
import TestimonialContainer from "@/components/TestimonialContainer";

function Testimonial() {
  const testimonies = [
    {
      name: "Brian Reynolds",
      role: "Businessman",
      image: "img/Testimonal-Businessman.png",
      comment:
        "I recently hired this professional signage and lighting company to completely revamp the outdated branding for my store. Their highly experienced team of experts was incredibly knowledgeable and provided me with a wide range of innovative, cost-effective solutions to choose from. The end result was absolutely stunning, and I've seen a noticeable, sustainable increase in foot traffic since implementing their cutting-edge signage and lighting techniques.",
    },
    {
      name: "David Mitchell",
      role: "Designer",
      image: "img/Testimonal-Designer.png",
      comment:
        "We've been using this company's maintenance services for several years now, and we couldn't be happier with their level of service. They are always quick to respond to any issues we have with our signage or lighting, and their team of skilled technicians is always able to find a solution. Their preventative maintenance program has also helped us avoid costly repairs and extend the lifespan of our equipment.",
    },
  ];

  return (
    <div className="">
      <TestimonialContainer testimonies={testimonies} />
    </div>
  );
}

export default Testimonial;
