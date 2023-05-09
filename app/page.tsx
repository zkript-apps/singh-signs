import FeaturedWorks from "@/components/pages/front/FeaturedWorks";
import Hero from "@/components/pages/front/Hero";
import Mission from "@/components/pages/front/Mission";
import Services from "@/components/pages/front/Services";
import Testimonial from "@/components/pages/front/Testimonial";
import WhyChooseUs from "@/components/pages/front/WhyChooseUs";
import Clients from "@/components/pages/front/Clients";
import TrustedByClient from "@/components/pages/front/TrustedByClient";
import OurTeam from "@/components/pages/front/OurTeam";
import MakeAppointment from "@/components/pages/front/MakeAppointment";
import Blog from "@/components/pages/front/Blog";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: "Singh Signs",
    description:
      "Our staff will work with your designer or our in house designers will help you make a lasting impression.",
  });
}

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Services />
      <Testimonial />
      <WhyChooseUs />
      <Clients />
      <TrustedByClient />
      {/* <OurTeam /> */}
      <MakeAppointment />
      <Blog />
      {/* <FeaturedWorks />
      <Clients /> */}
    </>
  );
}
