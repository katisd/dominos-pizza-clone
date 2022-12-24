import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type CardProps = {
  setInfo?: (data: boolean) => void;
  setcurrent?: (data: number) => void;
  showDescrib?: boolean;
  moreCl?: string;
  data: {
    id: number;
    name: string;
    pic: string;
    type: string;
    toppings: string[];
    new: boolean;
    vegetarian: boolean;
    spicy: boolean;
  };
};

const Card: React.FC<CardProps> = (props) => {
  // useInView hook for entry view animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // variants for animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : 100,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
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
    <div
      // setInfo: True when clicked on card to wiev more info about pizza
      // setcurrent: set current card to show more info about pizza
      onClick={() => {
        props.setInfo && props.setInfo(true);
        props.setcurrent && props.setcurrent(props.data.id - 1);
      }}
      className={` ${props.moreCl} card flex-none place-items-center  shadow-xl hover:drop-shadow-2xl`}
    >
      <motion.div
        className="object-covers select-none"
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <img
          draggable="false"
          loading="lazy"
          className="drag-none w-full select-none"
          src={`/pic/${props?.data?.name}.png`}
          alt="Pizza image"
        />
        <div className="card-body">
          <h2 className="card-title">
            {props?.data?.name}
            {props?.data?.new && (
              <motion.div
                variants={badgeVariants}
                className="badge-secondary badge"
              >
                NEW
              </motion.div>
            )}
          </h2>
          <p>
            {props?.showDescrib && props?.data?.toppings.map((x) => `${x}, `)}
          </p>
          <div className="card-actions justify-end">
            {props?.data?.vegetarian && (
              <div className="badge-success badge-outline badge ">
                vegetarian
              </div>
            )}
            {props?.data?.spicy && (
              <div className="badge-error badge-outline badge">Spicy</div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
