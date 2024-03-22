"use client";

import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

// $ import CustomButton component
import CustomButton from "./CustomButton";

// $ Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// $ Import Swiper required modules
import { Pagination } from "swiper/modules";

// $ Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// $ Membership Data

const membershipData = [
  {
    title: "standard",
    price: 30,
    benefits: [
      { icon: MdClose, text: "Includes Membership" },
      { icon: FaCheck, text: "Access to all gym activities" },
      { icon: MdClose, text: "Diet plan included" },
      { icon: FaCheck, text: "Health and Fitness Tips" },
      { icon: FaCheck, text: "Mon-Fri gym Access" },
      { icon: FaCheck, text: "Full Access to Everything" },
      { icon: MdClose, text: "no additional amenities" },
    ],
  },
  {
    title: "Ultimate",
    price: 45,
    benefits: [
      { icon: FaCheck, text: "Includes Membership" },
      { icon: FaCheck, text: "Access to all gym activities" },
      { icon: MdClose, text: "Diet plan included" },
      { icon: FaCheck, text: "Health and Fitness Tips" },
      { icon: MdClose, text: "Mon-Fri gym Access" },
      { icon: FaCheck, text: "Full Access to Everything" },
      { icon: MdClose, text: "no additional amenities" },
    ],
  },
  {
    title: "Professional",
    price: 60,
    benefits: [
      { icon: FaCheck, text: "Includes Membership" },
      { icon: FaCheck, text: "Access to all gym activities" },
      { icon: MdClose, text: "Diet plan included" },
      { icon: FaCheck, text: "Health and Fitness Tips" },
      { icon: MdClose, text: "Mon-Fri gym Access" },
      { icon: FaCheck, text: "Full Access to Everything" },
      { icon: FaCheck, text: "no additional amenities" },
    ],
  },
];

function MembershipSlider() {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="min-h-[680px]"
    >
      {membershipData.map((membership, index) => {
        return (
          <SwiperSlide key={index} className="text-white">
            <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
              <div className="py-5 px-[50px] border-b border-accent text-center">
                <h4 className="h4">{membership.title}</h4>
              </div>
              {/* Benefits */}
              <div className="py-[30px] px-[60px]">
                <ul className="flex flex-col gap-5 mb-7">
                  {membership.benefits.map((item, index) => {
                    return (
                      <li className="flex items-center gap-2" key={index}>
                        <item.icon className="text-accent text-lg" />
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
                {/* picture and button */}
                <p className="text-accent mb-8 flex gap-1 items-center">
                  <sup className="text-4xl">$</sup>
                  <strong className="text-6xl">{membership.price}</strong>
                  <em className="self-end text-2xl">/month</em>
                </p>
                <CustomButton
                  text="buy now"
                  containerStyles="w-[196px] h-[62px]"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default MembershipSlider;
