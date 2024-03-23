"use client";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

//Swiper Styles
import "swiper/css";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variants";

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2 font-oswald"
            >
              <span className="text-accent"> Where hard</span> work meets
              success
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white italic text-center lg:text-left mb-4"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia, eveniet?
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton
                text="Get Started"
                containerStyles="w-[12rem] h-[3rem] lg:w-[12rem] lg:h-[4rem]"
              />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <h1 className="h1 text-center lg:text-left mb-2">
              <span> Where hard</span> work meets success
            </h1>
            <p className="text-white italic text-center lg:text-left mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia, eveniet?
            </p>
            <CustomButton
              text="Get Started"
              containerStyles="w-[15rem] h-[5rem] lg:w-[12rem] lg:h-[4rem]"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <h1 className="h1 text-center lg:text-left mb-2">
              <span> Where hard</span> work meets success
            </h1>
            <p className="text-white italic text-center lg:text-left mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia, eveniet?
            </p>
            <CustomButton
              text="Get Started"
              containerStyles="w-[15rem] h-[5rem] lg:w-[12rem] lg:h-[4rem]"
            />
          </div>
        </div>
      </SwiperSlide>
      {/* Swiper NavButtons */}
      <SwiperNavButtons
        containerStyles="absolute bottom-2 lg:bottom-6 right-0 h-[3rem] w-full lg:w-[700px] z-[50] flex justify-center items-center lg:justify-start gap-2"
        btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
        iconStyles="text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;
