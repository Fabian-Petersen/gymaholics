"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variants";
import CustomButton from "./CustomButton";

const classes = [
  {
    name: "body building",
    img: "/assets/img/classes/bodybuilding.jpg",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "cardio",
    img: "/assets/img/classes/cardio.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit nulla optio ad quae pariatur.",
  },
  {
    name: "fitness",
    img: "/assets/img/classes/fitness.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit nulla optio ad",
  },
  {
    name: "crossfit",
    img: "/assets/img/classes/crossfit.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit nulla optio ad quae pariatur.",
  },
];

const Classes = () => {
  return (
    <section className="" id="class">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {classes.map((item, index) => {
          return (
            <div
              className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
              key={index}
            >
              {/* overlay */}
              <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
              <Image src={item.img} alt={item.name} fill objectFit="cover" />
              {/* text and button */}
              <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
                <motion.h3
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h3 text-accent"
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-white"
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <CustomButton
                    text="read more"
                    containerStyles="w-[164px] h-[46px]"
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Classes;
