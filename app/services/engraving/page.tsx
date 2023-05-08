import Header from "@/components/Header";
import Content from "@/components/pages/services/engraving/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: "Services > Engraving - Singh Signs",
    description:
      "Often the first point of contact you have with potential customers, your signage speaks volumes about you and your brand.",
  });
}

export default function Engraving() {
  return (
    <>
      <Header title="Engraving" root="Home / Services" />
      <Content />
    </>
  );
}
