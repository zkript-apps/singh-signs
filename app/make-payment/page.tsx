import Header from "@/components/Header";
import Content from "@/components/pages/make-payment/Content";
import { metaBuilder } from "@/helpers/metaBuilder";

export async function generateMetadata() {
  return metaBuilder({
    title: "Make Payment - Singh Signs",
    description: "Make a payment for Singh Signs Company services",
  });
}

export default function MakePayment() {
  return (
    <>
      <Header title="Make Payment" root="Home" />
      <Content />
    </>
  );
}
