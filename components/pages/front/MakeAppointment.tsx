import React from "react";
import Link from "next/link";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MakeAppointment() {
  return (
    <div className="bg-[url('/topFooterImage.png')] bg-cover bg-no-repeat bg-opacity-50 bg-oxford-blue">
      <div className="grid grid-cols-1 md:grid-cols-2 pt-24 pb-24 md:pb-0 md:pt-24 px-8 xl:px-80">
        <div className="bg-giants-orange/70 p-14 text-shady-white rounded-t-xl rounded-b-xl md:rounded-b-none md:rounded-t-xl space-y-5 mb-20 md:mb-0">
          <p className="font-bold tracking-[0.2em]">MAKING YOUR LIFE SAFER</p>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Delivering the Best Security Solutions to Our Clients
          </h2>
          <p className="font-medium">
            Suspendisse efficitur, ipsum sit amet posuere auctor, orci erat
            tempus ligula, id accumsan felis urna quis felis.
          </p>
          <Link href="/">
            <button className="shadow-lg mt-8 bg-oxford-blue text-light-gray px-6 py-3 hover:bg-oxford-blue/80 rounded transition ease-in-out hover:scale-90">
              More About Us
            </button>
          </Link>
        </div>
        <div className="relative flex justify-center items-center md:pb-24">
          <div className="relative bg-oxford-blue rounded-full z-20">
            <FontAwesomeIcon
              icon={faPlay}
              className="w-8 h-8 px-[2.25em] py-8 m-0 text-shady-white"
            />
          </div>
          <div className="absolute top-50 left-50 w-[104px] h-[101px] rounded-full border-2 bg-shady-white z-0 animate-ping opacity-75"></div>
        </div>
      </div>
    </div>
  );
}

export default MakeAppointment;
