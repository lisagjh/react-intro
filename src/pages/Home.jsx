import { Link } from "react-router-dom";
import Game from "../components/Game";

export default function Home() {
  return (
    <>
      <main>
        <h1> Home Page </h1>
        <Game />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </main>
    </>
  );
}
