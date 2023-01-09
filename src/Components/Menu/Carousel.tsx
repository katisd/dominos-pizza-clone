import { useEffect, useState } from "react";
import { Page } from "framer";
import Card from "./Card";
import pages from "../../../public/pizzaList.json";
import ChooseButton from "./MenuComponent/ChooseButton";
import BillArea from "./MenuComponent/BillArea";
import { useOrderContex } from "./MenuComponent/OrderContex";

type CarouselProps = {
  setCurrent: (data: number) => void;
  current: number;
};
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Carousel: React.FC<CarouselProps> = ({ ...props }) => {
  // useWindowSize hook for responsive design and rerendering motion components
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const { ThinDough, setThinDough, pizzaId, setPizzaId, setSize, size } =
    useOrderContex();

  useEffect(() => {
    props?.current + 1 === pizzaId ? null : setPizzaId(props.current + 1);
  }, [props, pizzaId, setPizzaId]);
  return (
    <div>
      {/* Tops */}
      <div className="flex h-[50vh] content-center items-center justify-between">
        <Page
          // width and height of Page need to be equal to width and height of Card
          width={"50%"}
          height={"40%"}
          radius={30}
          top={"30%"}
          center
          // given key as windowsize so that motion components rerender on window resize
          key={windowSize.innerWidth}
          currentPage={props.current}
          onChangePage={(current, _) => {
            props.setCurrent(current % pages.length);
          }}
        >
          {pages.map((data) => {
            return (
              <Card
                setcurrent={props.setCurrent}
                moreCl="w-full h-[100%] bg-none"
                data={data}
                key={data.id}
              />
            );
          })}
        </Page>
        {/* left arrow */}
        <div
          className="flex w-full basis-1/4 justify-center"
          onClick={() => {
            props.setCurrent(props.current - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
            onClick={() => {
              props.setCurrent((props.current - 1) % pages.length);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        {/* Right arrows */}
        <div
          className="flex  basis-1/4 items-center justify-center"
          onClick={() => {
            props.setCurrent((props.current + 1) % pages.length);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
            onClick={() => {
              props.setCurrent(props.current + 1);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      {/* bttm */}
      <div className="flex h-[50vh] flex-col p-10 md:flex-row">
        {/* Name+choose area */}
        <div className={`space-y-space md:basis-2/3`}>
          {/* Name */}
          <div
            className={`flex flex-row items-baseline space-x-spaceIn text-2xl`}
          >
            <span>{pages[props.current]?.name}</span>
            <span className="card-actions justify-end">
              {pages[props.current]?.vegetarian && (
                <div className="badge-success badge-outline badge ">
                  vegetarian
                </div>
              )}
              {pages[props.current]?.spicy && (
                <div className="badge-error badge-outline badge">Spicy</div>
              )}
            </span>
          </div>
          <div
            className={`flex flex-col space-y-space md:flex-row md:space-y-0 md:space-x-space`}
          >
            {/* chosedough */}
            <div className={`space-y-spaceIn`}>
              <div>Dough</div>
              <ChooseButton
                arrX={["Normal", "Thin"]}
                setx={setThinDough}
                x={ThinDough}
              />
            </div>
            {/* choose size */}
            <div className={`flex flex-col space-y-spaceIn`}>
              <div>Size</div>
              <ChooseButton
                arrX={["Small", "Medium", "Large"]}
                setx={setSize}
                x={size}
              />
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="divider divide-primary-content md:divider-horizontal" />
        {/* Bill */}
        <BillArea ThinDough={ThinDough} pizzaId={pizzaId} size={size} />
      </div>
    </div>
  );
};

export default Carousel;
