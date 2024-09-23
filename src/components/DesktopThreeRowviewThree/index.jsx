import { Heading, Img } from "../";
import React from "react";

export default function DesktopThreeRowviewThree({
   ...props
}) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col justify-between items-start md:w-full gap-5`}>
      <div className="flex w-[86%] justify-center self-center">
        <div className="flex w-full flex-col">
          <div className="relative z-[1] ml-2.5 flex items-end">
            <div className="flex flex-1 flex-col items-center self-center">
              <Heading size="headinglg" as="h4" className="text-[27px] font-semibold text-gray-800">
                {props.placeyour}
              </Heading>
              <Img
                src={props.img}
                alt="Order Image"
                className="relative ml-[30px] mr-[22px] mt-[-6px] h-[150px] w-[150px] object-cover"
              />
              <Heading
                as="p"
                className="relative mt-[-2px] w-[54%] text-center text-[20px] font-medium leading-6 text-gray-900"
              >
                {props.placeyourOne}
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
