import { useEffect, useState } from "react";
import { Page } from "framer";
import Card from "./Card";
import pages from "../../public/pizzaList.json";

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
      <Page
        // width and height of Page need to be equal to width and height of Card
        width={"80vw"}
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
              moreCl="w-[80vw] h-[50vh]"
              data={data}
              key={data.id}
            />
          );
        })}
      </Page>
      <div>{/* TODO: Add describtion Area with option to order pizza */}</div>
    </div>
  );
};

export default Carousel;
