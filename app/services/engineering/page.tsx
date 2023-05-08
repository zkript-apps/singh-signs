import Header from "@/components/Header";
import Content from "@/components/pages/services/engineering/Content";

import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: "Services > Engineering - Singh Signs",
    description:
      "When you think of signage engineering you might think of the structure of your outdoor sign or the design and manufacturing of your lighting fixtures.",
  });
}

export default function Engineering() {
  return (
    <>
      <Header title="Engineering" root="Home / Services" />
      <Content />
    </>
  );
}
