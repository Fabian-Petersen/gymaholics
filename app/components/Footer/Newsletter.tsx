import { motion } from "framer-motion";
import CustomButton from "../CustomButton";

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

function Newsletter() {
  return (
    <motion.div variants={footerItemVariants} className="">
      <h4 className="h4 text-accent mb-4">Newsletter</h4>
      <div className="flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          nam ab quidem.
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
  );
}

export default Newsletter;
