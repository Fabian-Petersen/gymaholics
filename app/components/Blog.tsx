"use client";

import Image from "next/image";

// $ import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

// $Swiper Styles
import "swiper/css";
import "swiper/css/navigation";

// $ Import Swiper required modules
import { Pagination } from "swiper/modules";

import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variants";

import Link from "next/link";

const blogData = [
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect balance between work and life",
    href: "",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect balance between work and life",
    href: "",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect balance between work and life",
    href: "",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect balance between work and life",
    href: "",
  },
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect balance between work and life",
    href: "",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect balance between work and life",
    href: "",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect balance between work and life",
    href: "",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect balance between work and life",
    href: "",
  },
];

const Blog = () => {
  return (
    <section className="bg-primary-300 text-white py-24" id="blog">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-8"
        >
          Blogs
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            className="h-[30rem] md:max-w-[660px] lg:max-w-[none] mb-8"
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
          >
            {blogData.map((blog, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-start h-full max-w-[320px]">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={320}
                      height={266}
                      className="mb-6"
                    />
                    <div>
                      <p className="max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1">
                        {blog.date}
                      </p>
                      <Link
                        href={blog.href}
                        className="hover:text-accent transition-all duration-300"
                      >
                        <h5>{blog.title}</h5>
                      </Link>
                    </div>
                    {/* <motion.div
                      variants={fadeIn("up", 0.8)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      <CustomButton
                        text="Get Started"
                        containerStyles="w-[12rem] h-[3rem] lg:w-[12rem] lg:h-[4rem]"
                      />
                    </motion.div> */}
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperNavButtons
              containerStyles="absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between"
              btnStyles="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            />
          </Swiper>
        </motion.div>
        <div>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <CustomButton
              text="View All"
              containerStyles="block w-[196px] h-[62px] mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
