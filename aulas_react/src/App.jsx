import { useState } from "react";
import "./App.css";
import IntroComponent from "./components/introComponent";
import EventComponent from "./components/eventComponent";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <IntroComponent />
      <EventComponent />
    </>
  );
}

export default App;
