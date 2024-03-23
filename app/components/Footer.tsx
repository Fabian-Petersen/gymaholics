"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

// variant for animation

const footerContainerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const footerItemVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

function Footer() {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <motion.div
          variants={footerContainerVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {/* info */}
          <motion.div
            variants={footerItemVariants}
            className="flex flex-col gap-4"
          >
            <Link rel="stylesheet" href="">
              <Image
                src="/assets/img/logo.png"
                alt="logo"
                width={70}
                height={55}
              />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Lincoln Park, Illinois</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>(071) 324-5647</span>
              </li>
              <li>
                <Link className="flex items-center gap-4" href={"#"}>
                  <FaEnvelope className="text-xl text-accent" />
                  <span>fabian@email.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          {/* blog Posts */}
          <motion.div
            variants={footerItemVariants}
            className="flex flex-col gap-4"
          >
            <h4 className="h4 text-accent mb-4">Recent Blog Posts</h4>
            <div className="border-b border-dotted border-gray-400 flex flex-col">
              <Link className="hover:text-accent transition-all" href={"#"}>
                <h5 className="h5 leading-snug mb-2">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            <div className="border-b border-dotted border-gray-400 flex flex-col ">
              <Link className="hover:text-accent transition-all" href={"#"}>
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            <div className="flex flex-col ">
              <Link className="hover:text-accent transition-all" href={"#"}>
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
          </motion.div>
          {/* gallery */}
          <motion.div variants={footerItemVariants} className="">
            <h4 className="h4 text-accent mb-4">Gallery</h4>
            {/* gallery images */}
            <div className="flex flex-wrap gap-2">
              <Link href={"#"} className="hover:opacity-80">
                <Image
                  src={"/assets/img/trainers/david.jpg"}
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
              <Link href={"#"} className="hover:opacity-80">
                <Image
                  src={"/assets/img/trainers/matt.jpg"}
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
              <Link href={"#"} className="hover:opacity-80">
                <Image
                  src={"/assets/img/trainers/rosy.jpg"}
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
              <Link href={"#"} className="hover:opacity-80">
                <Image
                  src={"/assets/img/trainers/sofia.jpg"}
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </motion.div>
          {/* newsletter */}
          <motion.div variants={footerItemVariants}>
            <h4 className="h4 text-accent mb-4">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque nam ab quidem.
              </p>
              <form action="" className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="your email address"
                  className="h-[50px] px-4 outline-none text-primary-300"
                />
                <CustomButton text="Send" containerStyles="h-[50px] px-8" />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Copyright */}
      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex gap-2 items-center justify-between">
            <span>&copy; Copyright 2024 Fitphysique</span>
            <ul className="flex gap-6 text-xl">
              <li>
                <Link
                  href={"#"}
                  className="text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-white hover:text-accent transition-all"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-white hover:text-accent transition-all"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
``;
export default Footer;
