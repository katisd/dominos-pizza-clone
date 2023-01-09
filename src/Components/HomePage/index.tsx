import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const imgVariants = {
  hidden: {
    opacity: 0,
    x: -170,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1,
    },
  },
};
// TODO: add Loading page
const HomePage: React.FC = () => {
  return (
    <div className="relative flex h-screen flex-col overflow-hidden  bg-base-100 sm:items-center md:items-start ">
      {/* picture */}
      <motion.div
        variants={imgVariants}
        initial="hidden"
        animate="visible"
        className=" mt-10 h-[50%] overflow-clip object-cover  md:absolute md:left-8 md:top-0 md:ml-[30vw] md:min-h-screen md:w-full"
      >
        <Image
          className="h-full object-cover"
          src="/PizzaLanding.jpg"
          alt="Pizza image"
          width={1000}
          height={1000}
        />
      </motion.div>
      {/* right pad */}
      <div className="z-10 my-auto flex flex-col items-center justify-center bg-base-100 text-center md:min-h-screen md:w-1/2 ">
        <h1 className="text-5xl font-bold">Domino&apos;s Pizza</h1>
        <p className="mt-5 text-2xl font-semibold">
          Join us for a slice (or two) of heaven
        </p>
        <Link
          href={"/menu"}
          className="btn-secondary btn-lg btn mt-10 rounded-full "
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
