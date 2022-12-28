import React from "react";
type SizeChooseProps = {
  arrX: string[];
  x: string;
  setx: (x: string) => void;
};
// return group of buttons
const ChooseButton: React.FC<SizeChooseProps> = ({ arrX, x, setx }) => {
  //generate buttons for group button
  function ButtonGenerate(text: string) {
    return (
      <button
        key={text}
        className={`btn-outline btn  ${text === x && "btn-active"}`}
        onClick={() => {
          text === x ? null : setx(text);
        }}
      >
        {text}
      </button>
    );
  }

  return (
    <div className="btn-group-horizontal btn-group">
      {arrX.map((size) => ButtonGenerate(size))}
    </div>
  );
};

export default ChooseButton;
