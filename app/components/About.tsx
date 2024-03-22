"use client";

import Achievements from "./Achievements";

import { FaUsers, FaUser } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variants";

const featured = [
  {
    icon: <FaUsers />,
    title: "award-winning trainers",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eveniet?",
  },
  {
    icon: <IoIosPricetags />,
    title: "excellent prices",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eveniet?",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eveniet?",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center tracking-wider"
          >
            About us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[600px] mx-auto text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            tempora quod tempore nesciunt repudiandae dolorum autem
            reprehenderit debitis fuga praesentium?
          </motion.p>
        </div>
        {/* Featured Items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4 border p-10 rounded-md"
                key={index}
              >
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p className="">{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
