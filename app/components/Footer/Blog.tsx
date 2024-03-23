import { motion } from "framer-motion";
import Link from "next/link";

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

function Blog() {
  return (
    <motion.div variants={footerItemVariants} className="">
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
  );
}

export default Blog;
