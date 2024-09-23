import { Heading, Img } from "../";
import React from "react";

export default function DesktopThreeColumnletterhea({
  letterheadsOne = "images/img_images_4.png",
  letterheadsTwo = "LetterHeads",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[24%] md:w-full gap-8`}>
      <Img src={letterheadsOne} alt="Letterhead Image" className="h-[342px] w-full object-cover" />
      <Heading size="headingmd" as="h4" className="text-[25px] font-semibold text-gray-900">
        {letterheadsTwo}
      </Heading>
    </div>
  );
}
