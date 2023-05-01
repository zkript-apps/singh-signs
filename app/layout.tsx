import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { metaBuilder } from "@/helpers/metaBuilder";

const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata() {
  return metaBuilder({
    title: "Fremont Sign Company",
    description:
      "Serving Nation Wide Markets with Sign Design, Manufacturing and Project Management Excellence for over 15 years in Bay Area.",
  });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <link rel="icon" type="image/x-icon" href={`/fav.png`} />
      <body>
        <MainNavigation />
        <div className="pt-[95px] md:pt-[135px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
