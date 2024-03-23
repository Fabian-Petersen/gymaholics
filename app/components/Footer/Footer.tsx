"use client";

// $ Components
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import Info from "./Info";
import Gallery from "./Gallery";

import { motion } from "framer-motion";
import Copyright from "./Copyright";

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
          <Info />
          <Blog />
          <Gallery />
          <Newsletter />
        </motion.div>
      </div>
      <div className="border-t border-white/20"></div>
      <Copyright />
    </footer>
  );
}
export default Footer;
