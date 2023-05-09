import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Blog() {
  const Blog = [
    {
      title: "How to Choose a Locksmith for Your Home",
      image: "/blog/blog-1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mi blandit, dapibus ipsum at, cursus lectus. Donec…",
      link: "/",
    },
    {
      title: "Wireless security system running on batteries",
      image: "/blog/blog-2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mi blandit, dapibus ipsum at, cursus lectus. Donec…",
      link: "/",
    },
    {
      title: "The Best Home Security System for Your Peace",
      image: "/blog/blog-3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mi blandit, dapibus ipsum at, cursus lectus. Donec…",
      link: "/",
    },
  ];

  return (
    <div className="pb-24 pt-24 px-8 lg:pb-32 xl:px-80 flex flex-col items-center space-y-5">
      <p className="font-bold tracking-[0.2em] text-giants-orange">OUR BLOG</p>
      <h2 className="text-3xl lg:text-5xl font-bold text-oxford-blue">
        The Best Latest News
      </h2>
      <p className="font-medium text-darker-gray">
        Suspendisse efficitur, ipsum sit amet posuere auctor, orci erat tempus
        ligula, id accumsan felis urna quis felis.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative">
        {Blog.map((item, index) => {
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
                alt="CEOfounder"
              />
              <h3 className="text-2xl">{item.title}</h3>
              <p className="font-medium">{item.description}</p>
              <Link
                href="/"
                className="font-semibold text-shady-white transition duration-500 hover:text-oxford-blue mt-5"
              >
                <button className="font-semibold text-shady-white transition duration-500 hover:text-oxford-blue mt-5">
                  Read More{" "}
                  <FontAwesomeIcon className="w-5 h-4" icon={faArrowRight} />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
