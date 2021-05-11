import { useState, useRef, useEffect } from "react";

export const useSwipeScroll = (options) => {
  const listRef = useRef(null);

  const {
    context = {
      noItems: 1,
      startIndex: 0,
    },
    itemCount = 100,
    threshold = 150,
  } = options;

  const [totalScrolled, setTotalScroll] = useState(0);
  const [index, setIndex] = useState(0);

  const changeIndex = (val) => {
    setTotalScroll(val * threshold);
  };

  const handleSwipe = (event) => {
    const a = event.deltaY;
    setTotalScroll(
      Math.max(0, Math.min(threshold * itemCount, totalScrolled + a))
    );
  };

  useEffect(() => {
    listRef.current.addEventListener("wheel", handleSwipe);

    return function cleanup() {
      listRef.current.removeEventListener("wheel", handleSwipe);
    };
  });

  useEffect(() => {
    console.log(index);
    setIndex(parseInt(totalScrolled / threshold));
  }, [totalScrolled]);

  return [listRef, index, changeIndex];
};

export const SwipeList = (props) => {
  const {
    itemBuilder = (index) => (
      <div style={{ width: "300px", height: "300px", backgroundColor: "red" }}>
        This is index: {index}! Place a builder function here
      </div>
    ),
    context = {
      noItems: 1,
      startIndex: 0,
    },
    itemCount = 100,
    threshold = 150,
  } = props;

  const [index, setIndex] = useState(context.startIndex);
  const [totalScrolled, setTotalScroll] = useState(
    context.startIndex * threshold
  );

  const listRef = useRef(null);

  const handleSwipe = (event) => {
    const a = event.deltaY;

    console.log(event.currentTarget);

    setTotalScroll(
      Math.max(0, Math.min(threshold * itemCount, totalScrolled + a))
    );
  };

  useEffect(() => {
    listRef.current.addEventListener("wheel", handleSwipe);

    return function cleanup() {
      listRef.current.removeEventListener("wheel", handleSwipe);
    };
  });

  useEffect(() => {
    setIndex(parseInt(totalScrolled / threshold));
  }, [totalScrolled]);

  return <div ref={listRef}>{itemBuilder(index)}</div>;
};
