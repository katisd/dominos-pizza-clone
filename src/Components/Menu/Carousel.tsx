import { useEffect, useState } from "react";
import { Page } from "framer";
import Card from "./Card";
import pages from "../../../public/pizzaList.json";

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

  return (
    <div>
      {/* TODO: add arrow */}
      <div className="z-10 flex h-[100vh] content-center items-center justify-between">
        {/* left arrow */}
        <div
          className="flex h-[100vh] basis-1/4 items-center"
          onClick={() => {
            props.setCurrent(props.current - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
            onClick={() => {
              props.setCurrent((props.current - 1) % pages.length);
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        {/* Right arrows */}
        <div
          className="flex h-[100vh] basis-1/4 items-center justify-end"
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
      <div>
        <Page
          // width and height of Page need to be equal to width and height of Card
          width={"50vw"}
          height={"50vh"}
          radius={30}
          center
          // given key as windowsize so that motion components rerender on window resize
          key={windowSize.innerWidth}
          currentPage={props.current}
          onChangePage={(current, _) => {
            props.setCurrent(current);
          }}
        >
          {pages.map((data) => {
            return (
              <Card
                setcurrent={props.setCurrent}
                moreCl="w-[50vw] h-[50vh] bg-none"
                data={data}
                key={data.id}
              />
            );
          })}
        </Page>
      </div>
      <div>{/* TODO: Add describtion Area with option to order pizza */}</div>
    </div>
  );
};

export default Carousel;
