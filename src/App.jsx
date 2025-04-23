import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Board from "./components/Board";
import Game from "./components/Game";

function App() {
  return (
    <>
      <main>
        {" "}
        <Game />
      </main>
    </>
  );
}

export default App;
