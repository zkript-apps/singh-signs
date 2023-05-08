import Header from "@/components/Header";
import Content from "@/components/pages/banners-and-digital-print/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: "Banners and Digital Print - Singh Signs",
    description:
      "Advancements in digital print technology and the introduction of top coated fabric have allowed printers to expand their product offerings to include fabric banners.",
  });
}

export default function BannersAndDigitalPrint() {
  return (
    <>
      <Header title="Banners And Digital Print" root="Home" />
      <Content />
    </>
  );
}
