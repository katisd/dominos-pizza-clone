import React from "react";
import { motion } from "framer-motion";
const imgVariants = {
  hidden: {
    opacity: 0,
    x: -150,
  },
  visible: {
    opacity: 1,
    x: -50,
    transition: {
      duration: 1,
    },
  },
};

const Landing = () => {
  return (
    <div className="container relative mx-auto flex justify-between overflow-hidden">
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
      {/* left pad */}
      <div className="z-10 min-h-screen w-1/12  bg-base-100"></div>
      {/* right pad */}
      <div className="z-10 min-h-screen w-1/2  bg-base-100"></div>
    </div>
  );
};

export default Landing;
