"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const SwiperNavButtons = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}) => {
  const swiper = useSwiper();
  return (
    <motion.div
      // variants={fadeIn("up", 1)}
      // initial="hidden"
      // whileInView={"show"}
      // viewport={{ once: false, amount: 0.2 }}
      className={`${containerStyles}`}
    >
      <button className={`${btnStyles}`} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={`${iconStyles}`} />
      </button>
      <button className={`${btnStyles}`} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={`${iconStyles}`} />
      </button>
    </motion.div>
  );
};

export default SwiperNavButtons;
