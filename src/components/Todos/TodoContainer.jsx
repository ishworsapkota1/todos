import React, { useState } from "react";
import TodoButton from "../TodoButton";
import TodosList from "./TodosList";
import { ReloadContext } from "../../pages/TodoPage";
import useAxiosCall from "../../hooks/useAxiosCall";
import { useContext } from "react";
const TodoContainer = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { reload } = useContext(ReloadContext);
  const todo = useAxiosCall("todos", reload);
  const filterAll = () => {
    setFilteredData(todo);
  };
  const filterDone = () => {
    const data = todo?.filter((item) => item.completed);

    console.log(data, todo);
    setFilteredData(data);
  };
  const filterTodo = () => {
    const data = todo?.filter((item) => !item.completed);
    setFilteredData(data);
  };
  return (
    <div className="mt-8 flex flex-col gap-4 mb-[160px]">
      <h1 className="text-center text-2xl font-medium">To do List</h1>
      <div className="flex gap-2">
        <TodoButton onClick={filterAll} text={"All"}></TodoButton>
        <TodoButton onClick={filterDone} text={"Done"}></TodoButton>
        <TodoButton onClick={filterTodo} text={"Todo"}></TodoButton>
      </div>
      <TodosList todo={todo} filteredData={filteredData} />
    </div>
  );
};

export default TodoContainer;
