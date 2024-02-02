import React, { useContext, useEffect } from "react";
import Todo from "./Todo";
import { useState } from "react";
import { Axios } from "../../../api/server";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReloadContext } from "../../pages/TodoPage";
import useAxiosCall from "../../hooks/useAxiosCall";

const TodosList = () => {
  const [data, setData] = useState([]);
  const { reload } = useContext(ReloadContext);
  const todo = useAxiosCall("todos", reload);

  // const [reload, setReload] = useState(false);
  // useEffect(() => {
  //   getAllTodos();
  // }, [reload]);

  // const getAllTodos = async () => {
  //   try {
  //     const res = await Axios.get("todos");
  //     setData(res.data.reverse());
  //   } catch (error) {
  //     // console.log(error);
  //     toast("Error ayo");
  //     // const notify = () => toast("Error occured");
  //     // alert
  //   }
  // };

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
      {/* <ToastContainer /> */}
      {/* <ToastContainer />; */}
      {/* <button onClick={notify}>Notify!</button>; */}
      {todo?.map((item) => {
        return <Todo key={item.id} item={item} />;
      })}
    </div>
  );
};

export default TodosList;
