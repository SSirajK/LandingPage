import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-4xl md:text-[38px] text-[40px]",
  h2: "font-semibold text-4xl sm:text-[32px] md:text-[34px]",
  h3: "font-bold md:text-2xl sm:text-[22px] text-[26px]",
  h4: "font-semibold text-2xl md:text-[22px] sm:text-xl",
  h5: "font-semibold text-[22px] sm:text-lg md:text-xl",
  h6: "text-lg",
  body1: "font-semibold text-sm",
  body2: "text-[13px]",
  body3: "text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
