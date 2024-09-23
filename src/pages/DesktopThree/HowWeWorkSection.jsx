import { Heading } from "../../components";
import DesktopThreeRowviewThree from "../../components/DesktopThreeRowviewThree";
import React from "react";

export default function HowWeWorkSection() {
  return (
    <div className="mt-[114px] flex flex-col items-start gap-[42px] pl-[78px] pr-14 md:px-5 sm:gap-[31px]">
      <Heading
        size="heading4XL"
        as="h2"
        className="text-[40px] font-bold text-gray-900 md:text-[38px] sm:text-[36px]"
      >
        How we Work and You get your desired Product
      </Heading>
      <div className="mx-auto flex w-full  gap-4 self-stretch md:flex-col">
        <DesktopThreeRowviewThree className="w-[30%]"  
          placeyour = "Place your Order"
          img="images/img_mobile_order.png"
          placeyourOne = "Place your order today by contacting us—we're ready to bring your vision to life!"
          />
          <div className="flex flex-row w-[10%] flex-itmes-center justify-between items-center">
            <div className="h-[20px] w-[20px] rounded-[10px] bg-indigo-900" />
            <div className="h-[20px] w-[20px] rounded-[10px] bg-indigo-900" />
            <div className="h-[20px] w-[20px] rounded-[10px] bg-indigo-900" />
            <div className="h-[20px] w-[20px] rounded-[10px] bg-indigo-900" />
          </div>
        <DesktopThreeRowviewThree className="w-[35%]" 
          placeyour = "Processing"
          img="images/img_process.png"
          placeyourOne = "We’ll process your order by selecting the perfect materials and sending it through our top-tier printing press for flawless results!"
        />
        {/* <div className="mb-28 mt-24 h-[20px] w-[20px] rounded-[10px] bg-indigo-900 md:my-0" />
        <div className="mb-28 mt-24 h-[20px] w-[20px] rounded-[10px] bg-indigo-900 md:my-0" /> */}
        <div className="flex flex-row w-[10%] flex-itmes-center justify-between items-center">
            <div className="h-[20px] w-[20px] rounded-[10px] bg-indigo-900" />
            <div className="h-[20px] w-[20px] rounded-[10px] bg-indigo-900" />
            <div className="h-[20px] w-[20px] rounded-[10px] bg-indigo-900" />
            <div className="h-[20px] w-[20px] rounded-[10px] bg-indigo-900" />
          </div>
        <DesktopThreeRowviewThree className="w-[30%]" 
            placeyour = "Shipment"
            img="images/img_container_truck.png"
            placeyourOne = "Place your order today by contacting us—we're ready to bring your vision to life!"
          />
      </div>
    </div>
  );
}
