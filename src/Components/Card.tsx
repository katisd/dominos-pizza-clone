import { motion } from "framer-motion";
import React from "react";

interface CardProps {
  size?: "sx" | "md" | "lg";
}

const Card: React.FC<CardProps> = (props) => {
  // default size is lg
  let cardWidth = 96;
  switch (props.size) {
    case "sx":
      cardWidth = 48;
      break;
    case "md":
      cardWidth = 72;
      break;
    case "lg":
      cardWidth = 96;
  }
  // variant for card
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      transition: {
        duration: 0.3,
      },
    },
  };
  const badgeVariants = {
    visible: {
      opacity: 1,
      y: [10, -10],
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="hover"
      className={`card w-${cardWidth} bg-base-100 shadow-xl`}
    >
      <figure>
        <img
          className="w-full object-cover"
          loading="lazy"
          src="https://cache.dominos.com/wam/prod/market/TH/_th/images/promo/30a9b5ea-bf89-41e7-a356-62d98daf9c3b.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <motion.div
            variants={badgeVariants}
            className="badge-secondary badge"
          >
            NEW
          </motion.div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge-outline badge">Fashion</div>
          <div className="badge-outline badge">Products</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
