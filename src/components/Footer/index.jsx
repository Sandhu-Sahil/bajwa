import { Heading, Img } from "../";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer className={`${props.className} relative flex items-start h-[498px] md:h-auto mt-[92px] px-3.5 py-[22px] sm:py-5 bg-[url(/public/images/img_group_119.png)] bg-cover bg-no-repeat`}>
      <div className="relative mb-[58px] h-[396px] w-full">
        <div className="absolute left-0 top-0 m-auto flex flex-col w-[30%] items-start">
          <div className="flex flex-row items-center">
            <Img src="images/img_dall_e.png" alt="Dalle Image" className="h-[249px] w-[57%] object-contain" />
          <Heading size="headingxs" as="h4" className="text-[24px] font-semibold text-gray-200 md:text-[22px]">
            Bajwa Prints
          </Heading>
          </div>
          <div className="relative flex items-start ml-10">
            <Heading size="headingxs" as="h4" className="text-[24px] font-semibold text-gray-200 md:text-[22px]">
            Print Fast, Impress Faster!
          </Heading>
          </div>
          
          
        </div>
      </div>
      <div className="absolute right-px top-[12%] m-auto flex w-[52%] items-start justify-end gap-20 md:relative md:flex-col mr-[2%]">
        <div className="flex w-[32%] flex-col items-start gap-3 md:w-full">
          <Heading size="headingxs" as="h4" className="text-[24px] font-bold text-gray-300_01 md:ml-0 md:text-[22px]">
            Description
          </Heading>
          <Heading as="p" className="w-full text-[20px] font-medium leading-6 text-blue_gray-100">
            We offer fast, high-quality printing for everything from business cards to flex banners. Get custom prints with precision, speed, and exceptional results every time!
          </Heading>
        </div>
        <div className="flex w-[25%] items-start justify-between gap-30 md:w-full sm:flex-col">
          <ul className="flex flex-col items-start gap-[3px]">
            <li>
              <Heading size="headingxs" as="h4" className="text-[24px] font-bold text-gray-300_01 md:ml-0 md:text-[22px]">
                Information
              </Heading>
            </li>
            <li>
              <a href="/#details-section">
                <Heading as="p" className="text-[20px] font-medium text-blue_gray-100">About Us</Heading>
              </a>
            </li>
            <li>
              <a href="/contact">
                <Heading as="p" className="text-[20px] font-medium text-blue_gray-100">Contact Us</Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading as="p" className="text-[20px] font-medium text-blue_gray-100">Privacy Policy</Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading as="p" className="text-[20px] font-medium text-blue_gray-100">Shipment Policy</Heading>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-[35%] items-start justify-between gap-30 self-center md:w-full sm:flex-col">
          <ul className="flex flex-col items-start self-center gap-[3px]">
            <div className="relative flex flex-1 flex-col items-end gap-[40px]">
              <Heading size="headingxs" as="h4" className="text-[24px] font-semibold text-gray-200 md:text-[22px]">
                Contact Us
              </Heading>
            </div>
            <li>
              <Heading as="p" className="text-[20px] font-medium text-blue_gray-100">Founder</Heading>
            </li>
            <li>
              <Heading as="p" className="text-[20px] font-medium text-blue_gray-100">Bajwa Prints</Heading>
            </li>
            <li>
              <Heading as="p" className="text-[20px] font-medium text-blue_gray-100">
                3601/20 Stanley Lane, Southport, Gold Coast QLD Australia 4215
              </Heading>
            </li>
            <li>
              <Heading as="p" className="text-[20px] font-medium text-blue_gray-100">Phone No: +61 415 547 175</Heading>
            </li>
            <li>
              <Heading as="p" className="text-[20px] font-medium text-blue_gray-100">Email: tbajwa6@gmail.com</Heading>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <Heading as="p" className="absolute bottom-[0.06px] left-[4%] m-auto text-[20px] font-medium text-gray-400_cc">
        Copyrights Reserved @ 2024
      </Heading>
      <br />
      <br />
    </footer>
  );
}
