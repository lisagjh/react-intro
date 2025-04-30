import Counter from "../components/Counter";
import ToDoList from "../components/ToDoList";

export default function Random() {
  return (
    <>
      <main>
        <h1> Random Page </h1>

        <div className="wrapper flex flex-col justify-center items-center gap-10">
          <ToDoList />
        </div>
      </main>
    </>
  );
}
