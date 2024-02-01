import React from "react";
import TodoButton from "../TodoButton";
import TodosList from "./TodosList";

const TodoContainer = ({ setReload, reload }) => {
  return (
    <div className="mt-8 flex flex-col gap-4 mb-[160px]">
      <h1 className="text-center text-2xl font-medium">To do List</h1>
      <div className="flex gap-2">
        <TodoButton onClick={() => {}} text={"All"}></TodoButton>
        <TodoButton onClick={() => {}} text={"Done"}></TodoButton>
        <TodoButton onClick={() => {}} text={"Todo"}></TodoButton>
      </div>
      <TodosList setReload={setReload} reload={reload} />
    </div>
  );
};

export default TodoContainer;
