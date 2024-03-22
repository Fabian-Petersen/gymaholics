"use client";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variants";

const trainerData = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "David Williams",
    role: "Body Builder Coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    social: [
      { icon: FaFacebook, href: "facebook.com" },
      { icon: FaTwitter, href: "twitter.com" },
      { icon: FaYoutube, href: "youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/rosy.jpg",
    name: "Rosy Rivera",
    role: "Fitness Coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    social: [
      { icon: FaFacebook, href: "facebook.com" },
      { icon: FaTwitter, href: "twitter.com" },
      { icon: FaYoutube, href: "youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Matt Stone",
    role: "Body Builder Coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    social: [
      { icon: FaFacebook, href: "facebook.com" },
      { icon: FaTwitter, href: "twitter.com" },
      { icon: FaYoutube, href: "youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Sofia Lee",
    role: "Body Builder Coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    social: [
      { icon: FaFacebook, href: "facebook.com" },
      { icon: FaTwitter, href: "twitter.com" },
      { icon: FaYoutube, href: "youtube.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-6"
        >
          Our Trainers
        </motion.h2>
        {/* Trainers Grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {trainerData.map((trainer, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center"
                key={index}
              >
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={trainer.image} alt={trainer.name} fill />
                </div>
                <h4>{trainer.name}</h4>
                {/* Role */}
                <p className="uppercase text-xs tracking-[3px] mb-2">
                  {trainer.role}
                </p>
                <p className="mb-6 max-w-[320px] mx-auto">
                  {trainer.description}
                </p>
                {/* socials */}
                <div className="flex gap-8 justify-center">
                  {trainer.social.map((social, index) => {
                    return (
                      <div key={index}>
                        <Link
                          href={social.href}
                          className="hover:text-accent transition-all"
                        >
                          <social.icon className="text-[1.5rem]" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* btn */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            text="See all Trainers"
            containerStyles="w-[196px] h-[62px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
