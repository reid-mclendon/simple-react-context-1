import "./App.css";
import { createContext, useContext } from "react";

function App() {
  return (
    <div className="App">
      <OuterContextProvider />
    </div>
  );
}

const OuterContext = createContext();

const OuterContextProvider = () => {
  const message = "Hello, world!";
  return (
    <OuterContext.Provider value={{ message }}>
      <div className="Outer">
        <Middle />
      </div>
    </OuterContext.Provider>
  );
};

function Middle() {
  return (
    <div className="Middle">
      <Inner />
    </div>
  );
}

function Inner() {
  const { message } = useContext(OuterContext);
  return (
    <div className="Inner">
      <p>{message}</p>
    </div>
  );
}

export default App;
