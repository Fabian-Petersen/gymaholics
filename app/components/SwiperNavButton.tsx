"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SwiperNavButtons = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      <button className={`${btnStyles}`}>
        <PiCaretLeftBold className={`${iconStyles}`} />
      </button>
      <button className={`${btnStyles}`}>
        <PiCaretRightBold className={`${iconStyles}`} />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
