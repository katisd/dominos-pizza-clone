import React from "react";

type PlusMinusButtonProps = {
  children: React.ReactNode;
  leftHandler: () => void;
  rightHandler: () => void;
};

const PlusMinusButton: React.FC<PlusMinusButtonProps> = ({
  children,
  leftHandler,
  rightHandler,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <button onClick={leftHandler} className="btn-primary btn">
        -
      </button>
      <div>{children}</div>
      <button onClick={rightHandler} className="btn-primary btn">
        +
      </button>
    </div>
  );
};

export default PlusMinusButton;
