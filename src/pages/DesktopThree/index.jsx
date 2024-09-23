import { Helmet } from "react-helmet";
import { Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HowWeWorkSection from "./HowWeWorkSection";
import IntroductionSection from "./IntroductionSection";
import WelcomeMessageSection from "./WelcomeMessageSection";
import WhatWeOfferSection from "./WhatWeOfferSection";
import WhyChooseSection from "./WhyChooseSection";
import React from "react";

export default function DesktopThreePage() {
  return (
    <>
      <Helmet>
        <title>Print Services - Fast, High-Quality Custom Printing | BajwaPrints</title>
        <meta
          name="description"
          content="Discover BajwaPrints for all your printing needs. From business cards to wedding cards."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div>
          <div className="flex items-start md:flex-col">
            <Img
              src="images/img_dall_e.png"
              alt="Dalle Image"
              className="h-[162px] w-[162px] self-center object-cover md:w-full"
            />
            <Header />
          </div>
          {/* introduction section */}
          <IntroductionSection />
        </div>

        {/* what we offer section */}
        <WhatWeOfferSection />

        {/* how we work section */}
        <HowWeWorkSection />

        {/* welcome message section */}
        <WelcomeMessageSection />

        {/* why choose section */}
        <WhyChooseSection />
        <Footer />
      </div>
    </>
  );
}
