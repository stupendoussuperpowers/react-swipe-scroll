import React from "react";
import ReactDOM from "react-dom";

const AnotherApp = (props) => {
  const [ref, index, setIndex] = useSwipeScroll({});

  return (
    <div
      ref={ref}
      style={{ width: "200px", height: "200px", backgroundColor: "cyan" }}
    >
      Inside {index} : )
    </div>
  );
};

const App = (props) => {
  const [ref, index, setIndex] = useSwipeScroll({});

  return (
    <div
      ref={ref}
      style={{ width: "400px", height: "400px", backgroundColor: "red" }}
    >
      {index}
      <AnotherApp />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
