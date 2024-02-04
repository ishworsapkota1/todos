import React from "react";
import Todo from "./Todo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodosList = ({ todo, filteredData }) => {
  return (
    <div className="flex flex-col gap-3">
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {
        filteredData.length > 0
          ? filteredData?.map((item) => {
              return <Todo item={item} />;
            })
          : todo?.map((item) => {
              return <Todo item={item} />;
            })
        /* {todo?.map((item) => {
        return <Todo key={item.id} item={item} />;
      })} */
      }
    </div>
  );
};

export default TodosList;
