import React from "react";

const sizes = {
  textxs: "text-[20px] font-medium",
  headingxs: "text-[20px] font-semibold",
  headingsm: "text-[24px] font-bold md:text-[22px]",
  headingmd: "text-[25px] font-semibold md:text-[23px] sm:text-[21px]",
  headinglg: "text-[27px] font-semibold md:text-[25px] sm:text-[23px]",
  headingxl: "text-[28px] font-semibold md:text-[26px] sm:text-[24px]",
  heading2xl: "text-[30px] font-bold md:text-[28px] sm:text-[26px]",
  heading3xl: "text-[32px] font-bold md:text-[30px] sm:text-[28px]",
  heading4xl: "text-[40px] font-bold md:text-[38px] sm:text-[36px]",
};

const Heading = ({ children, className = "", size = "textxs", as, ...restProps }) => {
  const Component = as || "h6";
  return (
    <Component className={`font-lato ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
