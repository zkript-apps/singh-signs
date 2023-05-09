import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function RecentProjects() {
  const Projects = [
    {
      title: "Channel Letters",
      image: "/mountain-works.png",
      description:
        "A wireway also serves as a mounting structure but typically contains only wiring. It is thinner and broader than a raceway, and may also be used as a backer panel for the channel letter set. A wireway also serves as a mounting structure but typically contains only wiring. ",
      link: "/",
    },
    {
      title: "Security Area Lights",
      image: "/Sarea1.jpg",
      description:
        "In the field of physical security, security lighting is lighting that intended to deter or detect intrusions or other criminal activity on a piece of real property. It can also be used to increase a feeling of safety. Lighting is integral to crime prevention through environmental design.",
      link: "/",
    },
    {
      title: "Vinyl Indoor and Outdoor",
      image: "/installation-3.png",
      description:
        "Banners are very popular products because they fit various purposes. From small exhibitions to large gatherings, banners are easy to spot and there’s a lot of information that can be displayed on them. Before you get to banner printing, there’s a few elements to keep in mind design-wise. ",
      link: "/",
    },
  ];

  return (
    <div className="pb-24 pt-24 px-8 lg:pb-32 xl:px-80 flex flex-col items-center space-y-5">
      <p className="font-bold tracking-[0.2em] text-giants-orange">
        OUR RECENT PROJECTS
      </p>
      <h2 className="text-3xl lg:text-5xl font-bold text-oxford-blue">
        The Best Latest News
      </h2>
      <p className="font-medium text-darker-gray">
        Take a look at our impressive portfolio of completed projects,
        showcasing our expertise and dedication to quality
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative">
        {Projects.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-giants-orange shadow-2xl p-5 rounded-lg relative mb-5 sm:mr-5 lg:mb-0 text-shady-white space-y-7 text-start"
            >
              <Image
                className="object-cover mb-3 transition hover:rotate-3 duration-300 hover:scale-105 hover:hue-rotate-15"
                src={`${item.image}`}
                width="600"
                height="500"
                alt={item.image}
              />
              <h3 className="text-2xl">{item.title}</h3>
              <p className="font-medium">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentProjects;
