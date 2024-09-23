import { Button, Heading } from "../../components";
import React from "react";

export default function IntroductionSection() {
  return (
    <div className="relative mt-[-40px] flex h-[666px] items-start justify-center bg-[url(/public/images/img_background_base.png)] bg-cover bg-no-repeat px-14 py-[68px] md:h-auto md:p-5">
      <div className="mb-[108px] flex w-[92%] flex-col items-start md:w-full">
        <Heading size="headingXS" as="h1" className="text-[20px] font-semibold text-gray-300">
          Your One Stop Print Shop
        </Heading>
        <Heading
          size="headingXL"
          as="h2"
          className="mt-8 w-[44%] text-[28px] font-semibold leading-[33px] text-gray-100 md:w-full md:text-[26px] sm:text-[24px]"
        >
          <span>We provide&nbsp;</span>
          <span className="font-extrabold">fast</span>
          <span>,&nbsp;</span>
          <span className="font-extrabold">high-quality</span>
          <span>&nbsp;printing for all your&nbsp;</span>
          <span className="font-extrabold">business needs</span>
          <span>
            , from business cards to flex banners. With custom prints, precision, and speed, we&nbsp;
          </span>
          <span className="font-extrabold">
            deliver flyers, brochures, and signage on tight deadlines—guaranteeing outstanding results every time!
          </span>
        </Heading>
        <a href="/contact">
        <Button
          shape="round"
          className="mt-[68px] min-w-[404px] rounded-[30px] border-2 border-white-a700 px-8 font-extrabold sm:px-5"
        >
          Place your Order Today &gt;&gt;
        </Button>
        </a>
      </div>
    </div>
  );
}

