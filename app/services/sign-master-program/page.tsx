import Header from "@/components/Header";
import Content from "@/components/pages/services/sign-master-program/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: "Services > Sign Master Program - Singh Signs",
    description:
      "A Master Sign Program (MSP) is used to create standard sign design guidelines for projects with multiple buildings or tenants.",
  });
}

export default function SignMasterProgram() {
  return (
    <>
      <Header title="Sign Master Program" root="Home / Services" />
      <Content />
    </>
  );
}
