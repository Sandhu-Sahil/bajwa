import { Heading } from "../../components";
import DesktopThreeRowfastturnarou from "../../components/DesktopThreeRowFastTurnaround";
import React, { Suspense } from "react";

const benefitsGrid = [
  {
    image: "images/img_conflict.png",
    fastturnaround: "Fast Turnaround 🌟 Get your prints quickly without compromising quality.",
  },
  {
    image: "images/img_customer.png",
    fastturnaround: "Custom Solutions 🎨 Tailored designs to match your brand's vision.",
  },
  {
    image: "images/img_quality.png",
    fastturnaround: "High-Quality Results 🖼 Crisp, vibrant prints every time.",
  },
  {
    image: "images/img_trust.png",
    fastturnaround: "Reliable Service 🤝 Professional, on-time delivery you can trust.",
  },
];

export default function WhyChooseSection() {
  return (
    <div className="mt-[70px] flex flex-col items-start gap-[42px] pl-[60px] pr-14 md:px-5">
      <Heading size="heading4x1" as="h2" className="text-[40px] font-bold text-gray-900 md:text-[38px] sm:text-[36px] self-center">
        Why Choose Bajwa Prints ?
      </Heading>
      <div className="ml-[132px] mr-[52px] grid grid-cols-2 gap-11 self-stretch md:mx-0 md:grid-cols-1">
        <Suspense fallback={<div>Loading feed...</div>}>
          {benefitsGrid.map((d, index) => (
            <DesktopThreeRowfastturnarou {...d} key={"benefitsGrid" + index} className="border-blue-800" />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
