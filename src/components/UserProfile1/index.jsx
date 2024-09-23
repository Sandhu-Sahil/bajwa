import { Heading, Img } from "../";
import React from "react";

export default function UserProfile1({
  userImage = "images/img_images_10.png",
  userName = "Spring tones Flex Standy",
  userCoinValue = "50.0",
  userRating = "4.0/5.0",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-end w-full gap-6`}>
      <Img src={userImage} alt="Product Image" className="ml-1.5 h-[318px] w-full object-cover" />
      <div className="flex flex-col items-end gap-2.5 self-stretch">
        <Heading size="headinglg" as="h4" className="w-[96%] text-[25px] font-semibold leading-[30px] text-gray-900">
          {userName}
        </Heading>
        <div className="flex flex-wrap items-center self-stretch">
          <Img src="images/img_dollar_coin.png" alt="Price Icon" className="h-[30px] w-[30px] self-end object-cover" />
          <Heading size="headingxs" as="p" className="text-[15px] font-semibold text-gray-900">
            {userCoinValue}
          </Heading>
          <Img src="images/img_facebook_like.png" alt="Rating Icon" className="ml-2 h-[30px] w-[30px] object-cover" />
          <Heading size="headingxs" as="p" className="self-end text-[15px] font-semibold text-gray-900">
            {userRating}
          </Heading>
        </div>
      </div>
    </div>
  );
}
