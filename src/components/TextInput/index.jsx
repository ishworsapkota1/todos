import React from "react";

const TextInput = ({ todoInput, setTodoInput }) => {
  return (
    <input
      type="text"
      placeholder="Enter todos"
      className="'w-full py-[0.5px] px-leading-8 focus:outline-none border-solid border-[2px] border-[#d1d5db]'"
      value={todoInput}
      onChange={(e) => setTodoInput(e.target.value)}
    />
  );
};

export default TextInput;
