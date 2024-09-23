import React from "react";

const sizes = {
  texts: "text-[27px] font-normal not-italic md:text-[25px] sm:text-[23px]",
};

const Text = ({ children, className = "", as, size = "texts", ...restProps }) => {
  const Component = as || "p";
  return (
    <Component className={`text-gray-700 font-lato ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
