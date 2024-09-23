import { Heading } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from 'react';

const promotionalProductsGrid = [
  {
    userImage: "images/img_images_10.png",
    userName: "Spring tones Flex Standy",
    userCoinValue: "50.0",
    userRating: "4.0/5.0",
  },
  {
    userImage: "images/img_download_3.png",
    userName: "Event Standees Summer Tones",
    userCoinValue: "50.0",
    userRating: "4.0/5.0",
  },
  {
    userImage: "images/img_images_10.png",
    userName: "Spring tones Flex Standy",
    userCoinValue: "50.0",
    userRating: "4.0/5.0",
  },
  {
    userImage: "images/img_il.png",
    userName: "Floral theme Wedding Invites",
    userCoinValue: "50.0",
    userRating: "4.0/5.0",
  },
  {
    userImage: "images/img_download_2.png",
    userName: "Blue Toned Business Exchange Specials",
    userCoinValue: "50.0",
    userRating: "4.0/5.0",
  },
  {
    userImage: "images/img_images_11.png",
    userName: "LetterHead office work purposed",
    userCoinValue: "50.0",
    userRating: "4.0/5.0",
  },
  {
    userImage: "images/img_images_9.png",
    userName: "Spring theme Wedding Invites",
    userCoinValue: "50.0",
    userRating: "4.0/5.0",
  },
  {
    userImage: "images/img_in_letterheads.png",
    userName: "LetterHead Red highlighted tones",
    userCoinValue: "50.0",
    userRating: "4.0/5.0",
  },
  {
    userImage: "images/img_images_8.png",
    userName: "Construction Team Cards",
    userCoinValue: "50.0",
    userRating: "4.0/5.0",
  }
];

export default function WishesSection() {
  return (
    <div className="mt-[74px] flex flex-col items-start gap-px-12 md:px-12 md:px-5 sm:gap-7">
      <Heading size="heading2xl" as="h2"
        className="text-[40px] font-bold text-gray-900 md:text-[38px] sm:text-[36px] mb-16 ml-20">
        Your Wishes, Our Commands
      </Heading>
      <div className="mx-auto grid w-full max-w-[1246px] grid-cols-3 justify-center gap-[226px] self-stretch md:grid-cols-2 sm:grid-cols-1">
        <Suspense fallback={<div>Loading feed...</div>}>
          {promotionalProductsGrid.map((d, index) => (
            <UserProfile1 {...d} key={`featuresGrid` + index} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
