import Header from "@/components/Header";
import Content from "@/components/pages/portfolio/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: "Portfolio - Singh Signs",
    description:
      "We offer the complete solution from sign design through to installation. Fremont Sign Company has earned the regard of its long-standing",
  });
}

export default function Portfolio() {
  return (
    <>
      <Header title="Portfolio" root="Home" />
      <Content />
    </>
  );
}
