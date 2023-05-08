import Header from "@/components/Header";
import Content from "@/components/pages/services/design/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: "Services > Design - Singh Signs",
    description:
      "All public sector buildings will typically have signage inside and outside of their establishments.",
  });
}

export default function Design() {
  return (
    <>
      <Header title="Design" root="Home / Services" />
      <Content />
    </>
  );
}
