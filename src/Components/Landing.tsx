import React from "react";
import { motion } from "framer-motion";
const imgVariants = {
  hidden: {
    opacity: 0,
    x: -170,
  },
  visible: {
    opacity: 1,
    x: -90,
    transition: {
      duration: 1,
    },
  },
};
// TODO: add Loading page
const Landing = () => {
  return (
    <div className=" relative mx-auto flex justify-end overflow-hidden">
      <motion.img
        variants={imgVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-0 left-0  min-h-screen w-full object-cover"
        src="/PizzaLanding.jpg"
        alt="Pizza image"
        width={4656}
        height={3792}
      />
      {/* right pad */}
      <div className="z-10 flex min-h-screen  w-1/2 items-center bg-base-100"></div>
    </div>
  );
};

export default Landing;
