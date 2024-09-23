import { Heading, Img } from "../";
import React from "react";

export default function UserProfile({ userImage = "images/img_images_4.png", userHeading = "LetterHeads ", ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[24%] md:w-full gap-8`}>
      <Img src={userImage} alt="Letterhead Image" className="h-[342px] w-full object-cover" />
      <Heading size="headinglg" as="h4" className="text-[25px] font-semibold text-gray-900">
        {userHeading}
      </Heading>
    </div>
  );
}
