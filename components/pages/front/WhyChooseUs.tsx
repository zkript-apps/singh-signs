import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function WhyChooseUs() {
  return (
    <div className="py-24 px-8 xl:px-80">
      <p className="font-bold tracking-[0.2em] text-giants-orange mb-5">
        WHY CHOOSE US
      </p>
      <h2 className="text-3xl lg:text-5xl font-bold text-oxford-blue mb-5 lg:mb-10">
        Need A Signage And Branding <br /> Solution? We Are The Experts
      </h2>
      <div className="flex items-center justify-center flex-wrap">
        <div className="sm:basis-3/6 lg:basis-1/3 sm:pr-20">
          <p className="text-xl font-semibold text-darker-gray italic mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <p className="font-medium leading-relaxed text-darker-gray mb-10">
            Aenean sed viverra magna. In et luctus nisi. Suspendisse efficitur,
            ipsum sit amet posuere auctor, orci erat tempus ligula, id accumsan
            felis urna quis felis. In ultricies libero quis orci aliquet, sit
            amet dignissim turpis venenatis. Duis efficitur, ligula id rhoncus
            aliquet, dui lacus lacinia metus, nec vulputate augue sem at dolor.
            Nulla nulla diam, sollicitudin eu volutpat eu, hendrerit eleifend
            mauris. Morbi ornare tristique accumsan. Maecenas eu mauris magna.
          </p>
        </div>
        <div className="sm:basis-3/6 lg:basis-1/3 w-96 relative mb-20 lg:mb-0">
          <div className="w-full h-[504px]">
            <Image
              className="object-cover rounded-xl z-10 absolute w-full h-full"
              src="/mountain-works.png"
              width="392"
              height="504"
              alt="mountainworks"
            />
          </div>
          <button className="absolute -bottom-10 z-20 -left-10 bg-giants-orange w-64 h-20 rounded-xl flex items-center justify-center transition duration-300 text-shady-white hover:text-oxford-blue">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="w-3 h-3 -mr-1.5"
            />
            <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
            <span className="ml-2">Book Now</span>
          </button>
          <div className="absolute -bottom-10 z-0 -left-10 bg-giants-orange w-64 h-96 rounded-xl"></div>
        </div>
        <div className="w-full lg:basis-1/3 pl-10 lg:pl-20">
          <ul className="text-oxford-blue lg:space-y-10 leading-relaxed list-disc marker:text-3xl marker:text-giants-orange">
            <li>
              <h4 className="text-xl mb-4">Led Lighting</h4>
              <p className="text-darker-gray font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                maximus purus quam.
              </p>
            </li>
            <li>
              <h4 className="text-xl mb-4">Retrofits</h4>
              <p className="text-darker-gray font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                maximus purus quam.
              </p>
            </li>
            <li>
              <h4 className="text-xl mb-4">Installation</h4>
              <p className="text-darker-gray font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                maximus purus quam.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
