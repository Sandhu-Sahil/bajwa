import { Helmet } from "react-helmet";
import { Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductSection from "./ProductSection";
import WishesSection from "./WishesSection";
import React from "react";

export default function DesktopFourPage() {
  return (
    <div>
      <Helmet>
        <title>Print Services - High-Quality Custom Printing | BajwaPrints</title>
        <meta 
          name="description" 
          content="Discover top-notch print services at BajwaPrints. From wedding cards to business cards, our fast, precision printing delivers exceptional results. Shop our most demanded products like spring tones flex banners, flyers, and more!" 
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
        </div>

        {/* product section */}
        <ProductSection />

        {/* wishes section */}
        <WishesSection />
        
        <Footer />
      </div>
    </div>
  );
}
