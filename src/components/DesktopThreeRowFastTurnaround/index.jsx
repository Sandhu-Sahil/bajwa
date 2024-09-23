import { Heading, Img } from "../";
import React from "react";

export default function DesktopThreeRowfastturnarou({
  image = "images/img_conflict.png",
  fastturnaround = "Fast Turnaround! Get your prints quickly without compromising quality.",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col items-start w-full gap-1.5 px-7 py-[42px] md:py-5 sm:p-5 border-[3px] border-solid bg-white-a700 rounded-[24px]`}>
      <Img src={image} alt="Conflict Image" className="mt-1.5 h-[90px] w-[90px] object-cover" />
      <Heading size="heading2xl" as="h3" className="mb-4 w-[78%] text-[30px] font-bold leading-9 text-blue_gray-700">
        {fastturnaround}
      </Heading>
    </div>
  );
}
