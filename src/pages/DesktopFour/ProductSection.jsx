import { Text, Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from 'react';

const stationeryOptionsList = [
  { userImage: "images/img_images_(4).png", userHeading: "LetterHeads" },
  { userImage: "images/img_images7.png", userHeading: "Wedding Cards" },
  { userImage: "images/img_images_6.png", userHeading: "Posters and Flexes" },
  { userImage: "images/img_04_Business-Card3.png", userHeading: "Business Cards" },
];

export default function ProductSection() {
  return (
    <div className="relative ml-[-2px] flex h-[622px] items-center bg-[url(/public/images/img_product_section.png)] bg-cover bg-no-repeat p-7 md:h-auto sm:p-5">
      <div className="mx-auto mb-1.5 flex w-full max-w-[1340px] flex-col items-start">
        <Heading
          size="heading2xl"
          as="h1"
          className="ml-1 text-[40px] font-bold text-gray-900 md:ml-0 md:text-[38px] sm:text-[36px]"
        >
          What we Offer
        </Heading>
        <Text as="p" className="mt-1.5 text-[27px] font-normal text-gray-700 md:ml-0 md:text-[25px] sm:text-[23px]">
          most demanded products
        </Text>
        <div className="mt-[42px] flex gap-[70px] self-stretch md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {stationeryOptionsList.map((d, index) => (
              <UserProfile {...d} key={`productsList` + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
