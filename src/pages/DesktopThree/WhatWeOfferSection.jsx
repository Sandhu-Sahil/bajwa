import { Text, Button, Heading } from "../../components";
import DesktopThreeColumnletterhea from "../../components/DesktopThreeColumnletterhea";
import React, { Suspense } from "react";

const stationeryOptionsList = [
  { letterheadsOne: "images/img_images_(4).png", letterheadsTwo: "LetterHeads" },
  { letterheadsOne: "images/img_images7.png", letterheadsTwo: "Wedding Cards" },
  { letterheadsOne: "images/img_images_6.png", letterheadsTwo: "Posters and Flexes" },
  { letterheadsOne: "images/img_04_Business-Card3.png", letterheadsTwo: "Business Cards" },
];

export default function WhatWeOfferSection() {
  return (
    <div className="mt-12 flex flex-col items-center gap-[42px] px-11 md:px-5">
      <div className="mx-auto flex w-full max-w-[1310px] self-stretch">
        <div className="flex w-full flex-col items-start">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Heading
              size="heading4XL"
              as="h2"
              className="text-[40px] font-bold text-gray-900 md:text-[38px] sm:text-[36px]"
            >
              What we Offer
            </Heading>
            <a href="/catalog">
            <Button
              shape="round"
              className="min-w-[352px] self-end rounded-[30px] border-2 border-gray-700 px-8 !text-gray-700 sm:px-5"
            >
              Browse Catalog &gt;&gt;
            </Button>
            </a>
          </div>
          <Text
            as="p"
            className="relative mt-[-2px] text-[27px] font-normal text-gray-700 md:text-[25px] sm:text-[23px]"
          >
            Most demanded products
          </Text>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1338px] gap-[70px] self-stretch md:flex-col">
        <Suspense fallback={<div>Loading feed...</div>}>
          {stationeryOptionsList.map((d, index) => (
            <DesktopThreeColumnletterhea {...d} key={"productsList" + index} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
