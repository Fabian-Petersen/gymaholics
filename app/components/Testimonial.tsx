"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

// $ Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// $ Import Swiper required modules
import { Pagination } from "swiper/modules";

// $ Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// $ Testimonial Data
const testimonialData = [
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Michael Smith",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Maria Garcia",
  },
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Michael Smith",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Maria Garcia",
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const Testimonial = () => {
  return (
    <section className="py-12 xl:py-28" id="testimonial">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-8"
        >
          Our Testimonials
        </motion.h2>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="h-[25rem]"
          >
            {testimonialData.map((testimonial, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={120}
                      height={120}
                      className="rounded-full border-2 border-accent"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <FaQuoteLeft className="text-2xl text-gray-300" />
                      <p className="max-w-[380px] mb-4">
                        {testimonial.message}
                      </p>
                      <span className="text-2xl text-accent">
                        {testimonial.name}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
