import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Game from "./components/Game";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </Router>
  );
}
