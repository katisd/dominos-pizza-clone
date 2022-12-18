import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
    <div className=" relative mx-auto flex h-screen justify-end overflow-hidden bg-base-100">
      {/* picture */}
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
      <div className="z-10 flex min-h-screen w-1/2 flex-col items-center justify-center bg-base-100">
        <h1 className="text-7xl font-bold">Domino&apos;s Pizza</h1>
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

export default Landing;
