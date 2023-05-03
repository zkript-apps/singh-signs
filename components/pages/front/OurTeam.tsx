import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
function OurTeam() {
  const Team = [
    {
      name: "Abraham Bancroft",
      role: "CEO Founder",
      image: "/team/CEO.png",
      fbLink: "https://www.facebook.com/fremontsigncompany/",
    },
    {
      name: "Beck Caython",
      role: "Locksmith",
      image: "/team/Locksmith-1.png",
      fbLink: "https://www.facebook.com/fremontsigncompany/",
    },
    {
      name: "Jeremy Thomas",
      role: "Locksmith",
      image: "/team/Locksmith-2.png",
      fbLink: "https://www.facebook.com/fremontsigncompany/",
    },
    {
      name: "Aaron Smith",
      role: "Locksmith",
      image: "/team/Locksmith-3.png",
      fbLink: "https://www.facebook.com/fremontsigncompany/",
    },
  ];

  return (
    <div className="py-24 px-8 xl:px-80 flex flex-col items-center space-y-5">
      <p className="font-bold tracking-[0.2em] text-giants-orange">OUR TEAM</p>
      <h2 className="text-3xl lg:text-5xl font-bold text-oxford-blue">
        We Have A Professional Here
      </h2>
      <p className="font-medium text-darker-gray">
        Suspendisse efficitur, ipsum sit amet posuere auctor, orci erat tempus
        ligula, id accumsan felis urna quis felis.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
        {Team.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-shady-white shadow-2xl p-5 text-center rounded-lg relative mb-5 sm:mr-5 lg:mb-0"
            >
              <Image
                className="object-cover mb-3"
                src={`${item.image}`}
                width="270"
                height="270"
                alt="CEOfounder"
              />
              <h3 className="text-2xl text-oxford-blue">{item.name}</h3>
              <p className="font-semibold text-giants-orange">{item.role}</p>
              <div className="absolute top-8 left-8">
                <Link href={`${item.fbLink}`}>
                  <FontAwesomeIcon
                    className="w-3.5 h-3.5 text-giants-orange transition hover:text-shady-white hover:scale-110"
                    icon={faFacebook}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
