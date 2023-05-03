import React from "react";
import TestimonialSlider from "@/components/TestimonialSlider";

function Testimonial() {
  const testimonies = [
    {
      name: "Colt D. Porter",
      role: "Businessman",
      image: "Testimonal-Businessman.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus purus quam, eget feugiat arcu vehicula ut. Morbi lacinia scelerisque massa, ut placerat magna iaculis nec. Ut ut purus sollicitudin dolor porttitor suscipit. Donec vitae velit at odio consectetur.",
    },
    {
      name: "Mike D. Alexa",
      role: "Designer",
      image: "Testimonal-Designer.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus purus quam, eget feugiat arcu vehicula ut. Morbi lacinia scelerisque massa, ut placerat magna iaculis nec. Ut ut purus sollicitudin dolor porttitor suscipit. Donec vitae velit at odio consectetur.",
    },
    {
      name: "Colt D. Porter",
      role: "Businessman",
      image: "Testimonal-Businessman.png",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus purus quam, eget feugiat arcu vehicula ut. Morbi lacinia scelerisque massa, ut placerat magna iaculis nec. Ut ut purus sollicitudin dolor porttitor suscipit. Donec vitae velit at odio consectetur.",
    },
  ];

  return (
    <div className="">
      <TestimonialSlider testimonies={testimonies} />
    </div>
  );
}

export default Testimonial;
