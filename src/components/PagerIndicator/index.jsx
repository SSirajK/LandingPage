import React from "react";

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
  const [slidesToShow, setSlidesToShow] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const _slidesToShow = sliderRef?.current?.state?.itemsInSlide;
    setSlidesToShow(_slidesToShow);

    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % count);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [sliderRef, count]);

  const getActiveCss = (isActive, transition) => {
    const baseCss = "inline-block cursor-pointer rounded-[50%] h-[9px] border-indigo_500 border border-solid w-[9px]";
    const activeBgCss = `bg-${transition}-A700`;
    const activeCss = `${baseCss} ${activeBgCss}`;
    return isActive ? activeCss : baseCss;
  };

  return (
    <div className={className} {...restProps}>
      {Array(count)
        .fill(0)
        .map((_, i) => {
          const isActive =
            activeIndex >= i * slidesToShow &&
            activeIndex < (i + 1) * slidesToShow;
          const transition = isActive ? "indigo" : "white";
          return (
            <div
              key={"indicator" + i}
              className={`${
                isActive ? selectedWrapperCss : unselectedWrapperCss
              } `}
            >
              <span
                className={`${getActiveCss(isActive, transition)} slider-indicator`}
                onClick={() => sliderRef?.current?.slideTo(i * slidesToShow)}
              />
            </div>
          );
        })}
    </div>
  );
};

export { PagerIndicator };
