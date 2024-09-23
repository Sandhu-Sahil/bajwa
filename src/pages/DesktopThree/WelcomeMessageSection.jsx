import { Heading } from "../../components";
import React from "react";

export default function WelcomeMessageSection() {
  return (
    <section id="details-section">
    <div className="mt-44 flex h-[624px] items-start justify-end bg-[url(/public/images/img_group_123.png)] bg-cover bg-no-repeat py-14 pl-14 pr-[106px] md:h-auto md:p-5">
      <Heading
        size="heading3XL"
        as="h2"
        className="text-shadow-ts w-[60%] mb-[104px] text-[27px] font-bold text-white-a700 md:text-[30px] sm:text-[28px]"
      >
        Welcome to Bajwa Prints! I'm Tanu Bajwa, and I'm thrilled to bring your ideas to life with our vibrant
        printing solutions. Our mission is to provide high-quality, fast, and reliable printing services that help
        your brand shine. Whether it's business cards, flexes, or brochures, we're here to ensure your vision is
        perfectly represented. Thank you for choosing us to be part of your journey—let's create something amazing
        together!
      </Heading>
    </div>
    </section>
  );
}
