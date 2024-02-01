import { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoContainer from "../components/Todos/TodoContainer";

const TodoPage = () => {
  const [reload, setReload] = useState(false);
  return (
    <div className="max-w-[76rem] mx-auto mt-10">
      <h1 className="text-center  font-medium  text-2xl mb-5">
        Enter todos here:
      </h1>
      <TodoInput setReload={setReload} />
      <TodoContainer setReload={setReload} reload={reload} />
    </div>
  );
};

export default TodoPage;
