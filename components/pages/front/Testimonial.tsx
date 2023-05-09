import React from "react";
import TestimonialSlider from "@/components/TestimonialSlider";

function Testimonial() {
  const testimonies = [
    {
      name: "Colt D. Porter",
      role: "Businessman",
      image: "Testimonal-Businessman.png",
      comment:
        "I recently hired this professional signage and lighting company to completely revamp the outdated branding for my store. Their highly experienced team of experts was incredibly knowledgeable and provided me with a wide range of innovative, cost-effective solutions to choose from. The end result was absolutely stunning, and I've seen a noticeable, sustainable increase in foot traffic since implementing their cutting-edge signage and lighting techniques.",
    },
    {
      name: "Mike D. Alexa",
      role: "Designer",
      image: "Testimonal-Designer.png",
      comment:
        "We've been using this company's maintenance services for several years now, and we couldn't be happier with their level of service. They are always quick to respond to any issues we have with our signage or lighting, and their team of skilled technicians is always able to find a solution. Their preventative maintenance program has also helped us avoid costly repairs and extend the lifespan of our equipment.",
    },
    {
      name: "Colt D. Porter",
      role: "Businessman",
      image: "Testimonal-Businessman.png",
      comment:
        "As an event planner, I rely on this company's expertise to create the perfect atmosphere for my clients. Their advanced lighting techniques and custom signage solutions have helped me transform even the most mundane venues into stunning, memorable spaces. Their team is always professional, reliable, and willing to go above and beyond to make sure my events are a success.",
    },
  ];

  return (
    <div className="">
      <TestimonialSlider testimonies={testimonies} />
    </div>
  );
}

export default Testimonial;
