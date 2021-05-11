import "./App.css";
import { SwipeList, useSwipeScroll } from "./SwipeList";

function App() {
  const builder = (index) => {
    return (
      <div style={{ width: "150px", height: "150px", backgroundColor: "cyan" }}>
        This index := {index}!
        <SwipeList
          itemBuilder={(i) => {
            return (
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "green",
                }}
              >
                {i}th index
              </div>
            );
          }}
        />
      </div>
    );
  };

  const [tryRef, tryIndex, trySet] = useSwipeScroll({});

  return (
    <div className="App">
      {/* <SwipeList itemBuilder={builder} /> */}
      <div
        ref={tryRef}
        style={{ width: "200px", height: "200px", backgroundColor: "grey" }}
      >
        {tryIndex}
        <button onClick={(e) => trySet(tryIndex + 1)}>Change Index!</button>
      </div>
    </div>
  );
}

export default App;
