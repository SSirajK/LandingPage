import React, { useEffect, useState } from "react";

const PagerIndicator = ({
  className,
  activeCss,
  inactiveCss,
  sliderRef = null,
  count,
  selectedWrapperCss = "",
  unselectedWrapperCss = "",

  ...restProps
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % count);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div className={className} {...restProps}>
      {Array(count)
        .fill(0)
        .map((_, i) => {
          const isActive = activeIndex === i;
          return (
            <div
              key={"indicator" + i}
              className={`${selectedWrapperCss}`}
            >
              <span
                className={`${isActive ? activeCss : inactiveCss}`}
              />
            </div>
          );
        })}
    </div>
  );
};

export { PagerIndicator };
