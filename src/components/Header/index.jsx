import { Img, Heading } from "../";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header className={`${props.className} flex sm:flex-col justify-between items-start md:self-stretch mt-12 ml-[-20px] gap-5 md:ml-0 md:px-5 relative flex-1`}>
      <div className="flex self-center">
        <Heading
          size="heading3XL"
          as="h2"
          className="text-black-900 text-[32px] font-bold md:text-[30px] sm:text-[28px]"
        >
          BajwaPrints
        </Heading>
      </div>
      
      <div className="mr-[52px] flex w-[60%] items-bottom justify-between gap-5 md:mr-0 md:w-full md:flex-col">
        <ul className="flex flex-wrap gap-[88px] self-end md:gap-5 md:self-auto">
          <li>
            <a href="/">
              <Heading size="headingxs" as="h5" className="text-[20px] font-semibold text-black-900">
                Home
              </Heading>
            </a>
          </li>
          <li>
            <a href="/catalog">
              <Heading size="headingxs" as="h5" className="text-[20px] font-semibold text-black-900">
                Catalog
              </Heading>
            </a>
          </li>
          <li>
            <a href="/#details-section">
              <Heading size="headingxs" as="h5" className="text-[20px] font-semibold text-black-900">
                About Us
              </Heading>
            </a>
          </li>
          <li>
            <a href="/contact">
              <Heading size="headingxs" as="h5" className="text-[20px] font-semibold text-black-900">
                Contact Us
              </Heading>
            </a>
          </li>
        </ul>
        
        <a href="#">
          <Img src="images/img_search.png" alt="Search Icon" className="h-[30px] w-[30px] object-cover md:w-full" />
        </a>
      </div>
    </header>
  );
}
