import { motion } from "framer-motion";
import Image from "next/image";
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

function Gallery() {
  return (
    <motion.div variants={footerItemVariants} className="flex flex-col gap-4">
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
  );
}

export default Gallery;
